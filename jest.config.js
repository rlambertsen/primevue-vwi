module.exports = {
    "preset": "@vue/cli-plugin-unit-jest",
    "transform": {
        "^.+\\.vue$": "vue-jest"
    },
    "moduleNameMapper": {
        "^primevue-vwinc/ripple(.*)$": "<rootDir>/src/components/ripple/Ripple.js",
        "^primevue-vwinc/tooltip(.*)$": "<rootDir>/src/components/tooltip/Tooltip.js",
        "^primevue-vwinc/useconfirm(.*)$": "<rootDir>/src/components/useconfirm/UseConfirm.js",
        "^primevue-vwinc/usetoast(.*)$": "<rootDir>/src/components/usetoast/UseToast.js",
        "^primevue-vwinc/utils(.*)$": "<rootDir>/src/components/utils/Utils.js",
        "^primevue-vwinc/api(.*)$": "<rootDir>/src/components/api/Api.js",
        "^primevue-vwinc/button(.*)$": "<rootDir>/src/components/button/Button.vue",
        "^primevue-vwinc/inputtext(.*)$": "<rootDir>/src/components/inputtext/InputText.vue",
        "^primevue-vwinc/dialog(.*)$": "<rootDir>/src/components/dialog/Dialog.vue",
        "^primevue-vwinc/menu(.*)$": "<rootDir>/src/components/menu/Menu.vue",
        "^primevue-vwinc/tieredmenu(.*)$": "<rootDir>/src/components/tieredmenu/TieredMenu.vue",
        "^primevue-vwinc/dropdown(.*)$": "<rootDir>/src/components/dropdown/Dropdown.vue",
        "^primevue-vwinc/inputnumber(.*)$": "<rootDir>/src/components/inputnumber/InputNumber.vue",
        "^primevue-vwinc/paginator(.*)$": "<rootDir>/src/components/paginator/Paginator.vue",
        "^primevue-vwinc/progressbar(.*)$": "<rootDir>/src/components/progressbar/ProgressBar.vue",
        "^primevue-vwinc/message(.*)$": "<rootDir>/src/components/message/Message.vue",
        "^primevue-vwinc/tree(.*)$": "<rootDir>/src/components/tree/Tree.vue",
        "^primevue-vwinc/confirmationeventbus(.*)$": "<rootDir>/src/components/confirmationeventbus/ConfirmationEventBus.js",
        "^primevue-vwinc/toasteventbus(.*)$": "<rootDir>/src/components/toasteventbus/ToastEventBus.js",
        "^primevue-vwinc/overlayeventbus(.*)$": "<rootDir>/src/components/overlayeventbus/OverlayEventBus.js",
        "^primevue-vwinc/terminalservice(.*)$": "<rootDir>/src/components/terminalservice/TerminalService.js",
        "^primevue-vwinc/virtualscroller(.*)$": "<rootDir>/src/components/virtualscroller/VirtualScroller.vue"
    },
    testMatch: [
        "**/src/components/**/*.spec.{j,t}s?(x)"
    ],
    timers: "fake"
}
