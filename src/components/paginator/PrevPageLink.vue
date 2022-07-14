<template>
	<button :class="containerClass" type="button" v-ripple>
		<slot name="prevBtnText">
            <span class="p-paginator-icon pi pi-angle-left"></span>
        </slot>
	</button>
</template>

<script>
import Ripple from 'primevue-vwinc/ripple';

export default {
    name: 'PrevPageLink',
    props: {
        themeClass: {
            type: String,
            default: ''
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
