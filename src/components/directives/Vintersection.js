export default {
    mounted(el, binding) {
        let options = {
            rootMargin: "0px",
            threshold: 1.0
        }
        let callback = (entries, observe) => {
            if (entries[0].isIntersecting) {
                binding.value()
            }
        }
        let observe = new IntersectionObserver(callback, options)
        observe.observe(el)
    },
    name: "intersection"
}