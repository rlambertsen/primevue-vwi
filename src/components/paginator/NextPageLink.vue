<template>
	<button :class="containerClass" type="button" v-ripple>
		<slot name="nextBtnText">
            <span class="p-paginator-icon pi pi-angle-right"></span>
        </slot>
	</button>
</template>

<script>
import Ripple from 'primevue-vwinc/ripple';

export default {
    name: 'NextPageLink',
    props: {
        themeClass: {
            type: String,
            default: 'p-paginator-next p-paginator-element p-link'
        }
    },
    computed: {
        containerClass() {
            return [this.themeClass, {'p-disabled': this.$attrs.disabled}];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>
