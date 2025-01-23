// file:/home/cicero-arch-omen/.config/surfingkeys/surfingkeys_config.js

// file:/home/cicero-arch-omen/.config/surfingkeys/surfingkeys.js

// an example to create a new mapping `ctrl-y`
// api.mapkey("<ctrl-y>", "Show me the money", function () {
//   Front.showPopup(
//     "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close).",
//   );
// });

// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
// api.map("gt", "T");

// an example to remove mapkey `Ctrl-i`
// api.unmap("<ctrl-i>");

api.Hints.setCharacters("uipjkbnm");

// Change hint hotkey from 'f' to 'h'
api.mapkey("h", "#1Hint links", function () {
  api.Hints.create("", api.Hints.dispatchMouseClick);
});
api.unmap("f"); // Unmap the default 'f'

// Change hint hotkey from 'f' to 'h'
api.map("h", "f"); // Map 'h' to hints
api.unmap("f"); // Unmap the default 'f'

// Change next tab to Alt+l
api.map("<Alt-l>", "R"); // Map Alt+l to next tab
api.unmap("R"); // Unmap the default 'R'

// Change previous tab to Alt+h
api.map("<Alt-h>", "E"); // Map Alt+h to previous tab
api.unmap("E"); // Unmap the default 'E'

// Map '-' to close the current tab
api.map("-", "x"); // 'x' is the default command to close a tab
api.unmap("x"); // Unmap the default 'x'

// Map '+' to reopen the last closed tab
api.map("=", "X"); // 'X' is the default command to reopen the last closed tab
api.unmap("X"); // Unmap the default 'X'

// Disable Alt key menus
settings.blocklistPattern = /.*\balt\b.*/; // Block any Alt key interference

// Map new keys
api.map("H", "S"); // Go back in history
api.map("L", "D"); // Go forward in history

// Unmap existing keys
api.unmap("S");
api.unmap("D");

// Unmap the default `d` and `u` keys
// Unmap default actions for `Ctrl+d` and `Ctrl+u`
// api.unmap("<Ctrl-d>");
// api.unmap("<Ctrl-u>");
// api.unmap("d");
// api.unmap("u");
// Map `Ctrl+d` and `Ctrl+u` to their respective scrolling actions
// api.map("<Ctrl-d>", "d");
// api.map("<Ctrl-u>", "u");

// NOTE: set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
// click `Save` button to make above settings to take effect.</ctrl-i></ctrl-y>
