"use client";
import{useState} from "react";
import Link from"next/link";

export default function Home() {
const [fileName, setFileName] = useState<string | null>(null);
const [processing, setProcessing] = useState(false);
const [result, setResult] = useState<null | {
  blur: number;
  brightness: number;
}> (null);

  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: 48, display: "grid", gap: 28 }}>
      <header style={{ display: "grid", gap: 10 }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Ayşe Tuğba Peköz</h1>
        <p style={{ fontSize: 18, color: "#555", margin: 0 }}>
          AI-focused Software Engineer | Backend & Computer Vision pipelines
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
          <a href="https://www.linkedin.com" style={{ textDecoration: "underline" }}>LinkedIn</a>
          <a href="https://github.com" style={{ textDecoration: "underline" }}>GitHub</a>
          <a href="mailto:aysetugbapek@gmail.com" style={{ textDecoration: "underline" }}>Email</a>
        </div>
      </header>
      <section
  style={{
    border: "1px dashed #ccc",
    borderRadius: 16,
    padding: 20,
    display: "grid",
    gap: 14,
    marginTop: 10,
  }}
>
  <h3 style={{ margin: 0 }}>Interactive Demo (UI-only)</h3>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setFileName(file.name);
      setProcessing(true);
      setResult(null);

      // mock processing
      setTimeout(() => {
        setProcessing(false);
        setResult({
          blur: 124.6,
          brightness: 138.2,
        });
      }, 1200);
    }}
  />

  {fileName && (
    <div style={{ fontSize: 14, color: "#555" }}>
      Uploaded file: <b>{fileName}</b>
    </div>
  )}

  {processing && (
    <div style={{ fontSize: 14, color: "#666" }}>
      Processing image…
    </div>
  )}

  {result && (
    <div
      style={{
        background: "#f9fafb",
        borderRadius: 12,
        padding: 14,
        display: "grid",
        gap: 6,
        fontSize: 14,
      }}
    >
      <div>Blur score: <b>{result.blur}</b></div>
      <div>Brightness: <b>{result.brightness}</b></div>
      <div>Status: <b style={{ color: "green" }}>OK</b></div>
    </div>
  )}

  <div style={{ fontSize: 12, color: "#777" }}>
    This is a UI-only demo. Backend integration available.
  </div>
</section>


      <section style={{ border: "1px solid #e5e5e5", borderRadius: 16, padding: 22, display: "grid", gap: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <h2 style={{ fontSize: 22, margin: 0 }}>Profile Image Processing Service (MVP)</h2>
          <span style={{ fontSize: 13, color: "#666", background: "#f3f4f6", padding: "6px 10px", borderRadius: 999 }}>
            Backend · CV
          </span>
        </div>

        <p style={{ color: "#555", margin: 0, lineHeight: 1.6 }}>
          A FastAPI-based image pipeline that validates uploads, normalizes profile images (center crop + 512×512 resize),
          and returns quality metrics (blur/brightness) for consistent marketplace-style onboarding.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
          <span style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 999, fontSize: 13 }}>FastAPI</span>
          <span style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 999, fontSize: 13 }}>OpenCV</span>
          <span style={{ background: "#f3f4f6", padding: "6px 10px", borderRadius: 999, fontSize: 13 }}>PIL</span>
        </div>

        <Link href="/overview" style={{ marginTop: 8, textDecoration: "underline", width: "fit-content" }}>
          Design overview →
        </Link>
      </section>

      <section style={{ color: "#666", fontSize: 14, lineHeight: 1.6 }}>
        <strong style={{ color: "#222" }}>Note:</strong> This page is intentionally concise; detailed implementation and architecture
        are available in the overview.
      </section>
    </main>
  );
}

