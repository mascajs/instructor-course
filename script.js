document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = "복사됨";
    } catch {
      button.textContent = "직접 선택해 복사하세요";
    }

    window.setTimeout(() => {
      button.textContent = original;
    }, 1800);
  });
});
