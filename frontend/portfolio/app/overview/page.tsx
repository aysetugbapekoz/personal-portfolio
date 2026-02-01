
import Link from"next/link";
export default function Overview() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: 48, display: "grid", gap: 18 }}>
      <header style={{ display: "grid", gap: 8 }}>
        <h1 style={{ fontSize: 32, margin: 0 }}>Profile Image Processing Service – Design Overview</h1>
        <p style={{ color: "#555", margin: 0 }}>
          A lightweight backend pipeline for profile-photo normalization and quality checks.
        </p>
      </header>

      <section style={{ display: "grid", gap: 8 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>What this system does</h2>
        <p style={{ color: "#555", margin: 0, lineHeight: 1.7 }}>
          Accepts a user-uploaded image, applies standard preprocessing to produce consistent profile photos,
          and returns quality metrics that can be used to warn users or auto-reject poor inputs.
        </p>
      </section>

      <section style={{ display: "grid", gap: 8 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>High-level pipeline</h2>
        <ol style={{ color: "#555", paddingLeft: 18, lineHeight: 1.8, margin: 0 }}>
          <li><b>Upload + validation</b> (content type)</li>
          <li><b>Decode</b> bytes into image (PIL)</li>
          <li><b>Normalize</b>: center crop (square) → resize (512×512)</li>
          <li><b>Metrics</b>: blur score (Laplacian variance), brightness (mean intensity)</li>
          <li><b>Return</b> JSON response for UI integration</li>
        </ol>
      </section>

      <section style={{ display: "grid", gap: 6 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>Stack</h2>
        <p style={{ color: "#555", margin: 0 }}>Python · FastAPI · OpenCV · PIL</p>
      </section>

      <div style={{ marginTop: 10 }}>
        <Link href="/" style={{ textDecoration: "underline" }}>
          ← Back
        </Link>
      </div>
    </main>
  );
}
