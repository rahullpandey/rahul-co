"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FRAME_BASE_URL,
  FRAME_COUNT,
  FRAME_EXTENSION,
  FRAME_FILE_PREFIX
} from "../../data/travelSite";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function padFrame(frameNumber) {
  return String(frameNumber).padStart(3, "0");
}

function getFadeWindow(progress, fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd) {
  const fadeIn = clamp((progress - fadeInStart) / (fadeInEnd - fadeInStart), 0, 1);
  const fadeOut = 1 - clamp((progress - fadeOutStart) / (fadeOutEnd - fadeOutStart), 0, 1);
  return clamp(Math.min(fadeIn, fadeOut), 0, 1);
}

export default function FrameSequenceHero() {
  const trackRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const animationFrameRef = useRef(0);
  const loadedRef = useRef(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const isLoading = loadedCount < FRAME_COUNT;
  const loadingPercent = useMemo(
    () => Math.round((loadedCount / FRAME_COUNT) * 100),
    [loadedCount]
  );

  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const frame = imagesRef.current[frameIndex];
    if (!frame || !frame.complete || frame.naturalWidth === 0) return;

    const viewportWidth = canvas.clientWidth;
    const viewportHeight = canvas.clientHeight;
    const isTouchViewport = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, isTouchViewport ? 1.5 : 2);

    if (canvas.width !== viewportWidth * pixelRatio || canvas.height !== viewportHeight * pixelRatio) {
      canvas.width = viewportWidth * pixelRatio;
      canvas.height = viewportHeight * pixelRatio;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(pixelRatio, pixelRatio);
    }

    const scale = Math.max(viewportWidth / frame.naturalWidth, viewportHeight / frame.naturalHeight);
    const drawWidth = frame.naturalWidth * scale;
    const drawHeight = frame.naturalHeight * scale;
    const drawX = (viewportWidth - drawWidth) / 2;
    const drawY = (viewportHeight - drawHeight) / 2;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.clearRect(0, 0, viewportWidth, viewportHeight);
    context.drawImage(frame, drawX, drawY, drawWidth, drawHeight);
  };

  useEffect(() => {
    let isCancelled = false;

    const handleAssetReady = () => {
      loadedRef.current += 1;
      if (!isCancelled) {
        setLoadedCount(loadedRef.current);
      }
    };

    for (let index = 1; index <= FRAME_COUNT; index += 1) {
      const image = new Image();
      image.src = `${FRAME_BASE_URL}/${FRAME_FILE_PREFIX}${padFrame(index)}${FRAME_EXTENSION}`;
      image.onload = handleAssetReady;
      image.onerror = handleAssetReady;
      imagesRef.current[index - 1] = image;
    }

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const updateSequence = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const maxScroll = track.offsetHeight - window.innerHeight;
      const travelled = clamp(-rect.top, 0, maxScroll);
      const nextProgress = maxScroll > 0 ? travelled / maxScroll : 0;
      const frameIndex = Math.round(nextProgress * (FRAME_COUNT - 1));

      setProgress(nextProgress);
      drawFrame(frameIndex);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = window.requestAnimationFrame(updateSequence);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [isLoading]);

  const firstOpacity = getFadeWindow(progress, 0, 0.1, 0.2, 0.26);
  const secondOpacity = getFadeWindow(progress, 0.3, 0.38, 0.55, 0.62);
  const thirdOpacity = clamp((progress - 0.65) / 0.1, 0, 1);

  return (
    <section ref={trackRef} className="travel-hero-track">
      <div className="travel-hero-sticky">
        {isLoading ? (
          <div className="travel-loader">
            <h1>LOADING EXPERIENCE</h1>
            <div className="travel-loader-bar">
              <span style={{ width: `${loadingPercent}%` }} />
            </div>
          </div>
        ) : null}

        <canvas ref={canvasRef} className="travel-hero-canvas" />

        <div className="travel-hero-overlay">
          <div
            className="travel-hero-copy"
            style={{
              opacity: firstOpacity,
              transform: `translate3d(0, ${(1 - firstOpacity) * 50 - clamp((progress - 0.2) / 0.06, 0, 1) * 40}px, 0) scale(${0.9 + firstOpacity * 0.1})`
            }}
          >
            <h1>
              EXPLORE
              <br />
              PARADISE
            </h1>
          </div>

          <div
            className="travel-hero-copy travel-hero-copy-secondary"
            style={{
              opacity: secondOpacity,
              transform: `translate3d(${(1 - secondOpacity) * -48}px, 0, 0)`
            }}
          >
            <div>
              <h2>
                We have
                <br />
                financing
                <br />
                plans.
              </h2>
              <Link href="/contact" className="travel-glass-button">
                Contact Us
              </Link>
            </div>
          </div>

          <div
            className="travel-hero-copy travel-hero-copy-final"
            style={{
              opacity: thirdOpacity,
              transform: `translate3d(0, ${(1 - thirdOpacity) * 40}px, 0) scale(${0.92 + thirdOpacity * 0.08})`
            }}
          >
            <h2>YOU DESERVE IT</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
