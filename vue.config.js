const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/primevue-vwinc/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                'primevue-vwinc/ripple': path.resolve(__dirname, 'src/components/ripple/Ripple.js'),
                'primevue-vwinc/tooltip': path.resolve(__dirname, 'src/components/tooltip/Tooltip.js'),
                'primevue-vwinc/useconfirm': path.resolve(__dirname, 'src/components/useconfirm/UseConfirm.js'),
                'primevue-vwinc/usetoast': path.resolve(__dirname, 'src/components/usetoast/UseToast.js'),
                'primevue-vwinc/utils': path.resolve(__dirname, 'src/components/utils/Utils.js'),
                'primevue-vwinc/api': path.resolve(__dirname, 'src/components/api/Api.js'),
                'primevue-vwinc/portal': path.resolve(__dirname, 'src/components/portal/Portal.vue'),
                'primevue-vwinc/button': path.resolve(__dirname, 'src/components/button/Button.vue'),
                'primevue-vwinc/inputtext': path.resolve(__dirname, 'src/components/inputtext/InputText.vue'),
                'primevue-vwinc/dialog': path.resolve(__dirname, 'src/components/dialog/Dialog.vue'),
                'primevue-vwinc/menu': path.resolve(__dirname, 'src/components/menu/Menu.vue'),
                'primevue-vwinc/tieredmenu': path.resolve(__dirname, 'src/components/tieredmenu/TieredMenu.vue'),
                'primevue-vwinc/dropdown': path.resolve(__dirname, 'src/components/dropdown/Dropdown.vue'),
                'primevue-vwinc/inputnumber': path.resolve(__dirname, 'src/components/inputnumber/InputNumber.vue'),
                'primevue-vwinc/paginator': path.resolve(__dirname, 'src/components/paginator/Paginator.vue'),
                'primevue-vwinc/progressbar': path.resolve(__dirname, 'src/components/progressbar/ProgressBar.vue'),
                'primevue-vwinc/message': path.resolve(__dirname, 'src/components/message/Message.vue'),
                'primevue-vwinc/tree': path.resolve(__dirname, 'src/components/tree/Tree.vue'),
                'primevue-vwinc/confirmationeventbus': path.resolve(__dirname, 'src/components/confirmationeventbus/ConfirmationEventBus.js'),
                'primevue-vwinc/toasteventbus': path.resolve(__dirname, 'src/components/toasteventbus/ToastEventBus.js'),
                'primevue-vwinc/overlayeventbus': path.resolve(__dirname, 'src/components/overlayeventbus/OverlayEventBus.js'),
                'primevue-vwinc/terminalservice': path.resolve(__dirname, 'src/components/terminalservice/TerminalService.js'),
                'primevue-vwinc/virtualscroller': path.resolve(__dirname, 'src/components/virtualscroller/VirtualScroller.vue')
            },
        },
        output: {
            libraryExport: 'default'
        }
    },
    css: {
        extract: false
    }
}
