import os
from pathlib import Path

from PIL import Image


ROOT_DIR = Path(__file__).resolve().parent
TARGET_DIRS = [
    ROOT_DIR / "public",
    ROOT_DIR / "src" / "assets",
]
VALID_EXTENSIONS = {".jpg", ".jpeg", ".png"}
MAX_WIDTH = 1920
WEBP_QUALITY = 75


def iter_image_files():
    """Yield all matching image files under TARGET_DIRS."""
    for base in TARGET_DIRS:
        if not base.exists():
            continue
        for dirpath, _, filenames in os.walk(base):
            for name in filenames:
                ext = Path(name).suffix.lower()
                if ext in VALID_EXTENSIONS:
                    yield Path(dirpath) / name


def ensure_rgb(image: Image.Image) -> Image.Image:
    """Convert image to a WebP-friendly mode."""
    if image.mode in ("RGB", "L"):
        return image
    return image.convert("RGB")


def process_image(path: Path) -> None:
    """Resize (if needed) and convert a single image to WebP."""
    try:
        with Image.open(path) as img:
            img.load()

            # Resize if wider than MAX_WIDTH while preserving aspect ratio
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / float(img.width)
                new_height = int(img.height * ratio)
                img = img.resize((MAX_WIDTH, new_height), Image.LANCZOS)

            img = ensure_rgb(img)

            webp_path = path.with_suffix(".webp")

            # Save as WebP with specified quality; keep originals as requested
            img.save(webp_path, format="WEBP", quality=WEBP_QUALITY, method=6)

            print(f"Optimized: {path} -> {webp_path}")
    except Exception as exc:  # noqa: BLE001
        print(f"Failed to process {path}: {exc}")


def main() -> None:
    print("Scanning for images in:")
    for d in TARGET_DIRS:
        print(f" - {d}")

    for img_path in iter_image_files():
        process_image(img_path)


if __name__ == "__main__":
    main()

