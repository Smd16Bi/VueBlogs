export default  {
    props: {
        show: Boolean
    },
    methods: {
        hideDialog: function() {
            this.$emit("update:show", false)
        }
    },
    mounted() {
        console.log("Hello world");
    }
}