(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const popover = document.getElementById("wa-popover");
    if (!popover) return;

    let activeTrigger = null;

    function closePopover() {
      popover.classList.remove("open");
      activeTrigger = null;
    }

    function applyMessageTemplate(trigger) {
      const msgKey = trigger.getAttribute("data-wa-message");
      popover.querySelectorAll(".wa-popover-option").forEach((opt) => {
        if (!opt.dataset.baseHref) opt.dataset.baseHref = opt.getAttribute("href");
        let href = opt.dataset.baseHref;
        if (msgKey && typeof I18N !== "undefined" && window.BDR_I18N) {
          const dict = I18N[window.BDR_I18N.getLang()] || I18N.en;
          const msg = dict["common.wa.msg." + msgKey];
          if (msg) href += "?text=" + encodeURIComponent(msg);
        }
        opt.setAttribute("href", href);
      });
    }

    function openPopoverNear(trigger) {
      activeTrigger = trigger;
      applyMessageTemplate(trigger);
      popover.classList.add("open");

      const rect = trigger.getBoundingClientRect();
      const margin = 10;
      popover.style.left = "0px";
      popover.style.top = "0px";

      const popRect = popover.getBoundingClientRect();

      let left = rect.left;
      if (left + popRect.width > window.innerWidth - margin) {
        left = rect.right - popRect.width;
      }
      left = Math.max(margin, left);

      let top = rect.bottom + 8;
      if (top + popRect.height > window.innerHeight - margin) {
        top = rect.top - popRect.height - 8;
      }
      top = Math.max(margin, top);

      popover.style.left = left + "px";
      popover.style.top = top + "px";
    }

    document.querySelectorAll(".wa-trigger").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        if (activeTrigger === trigger && popover.classList.contains("open")) {
          closePopover();
        } else {
          openPopoverNear(trigger);
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (popover.classList.contains("open") && !popover.contains(e.target)) {
        closePopover();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closePopover();
    });

    window.addEventListener("scroll", closePopover, { passive: true });
    window.addEventListener("resize", closePopover);
  });
})();
