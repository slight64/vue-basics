import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }
    const appObserver = new IntersectionObserver(callback, options)
    appObserver.observe(el)
  },
  name: 'itersection',
}
