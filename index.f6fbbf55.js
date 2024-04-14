document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(t)}),document.querySelector(".tree").addEventListener("click",function(e){var t=e.target.closest("li");if(t){var n=t.children[1];n&&(n.hidden=!n.hidden)}});
//# sourceMappingURL=index.f6fbbf55.js.map
