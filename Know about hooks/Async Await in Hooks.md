# 🚀 Vue 3 Lifecycle Hooks & Async/Await Support

## ❌ Hooks That **Cannot** Be `async`
The following lifecycle hooks **do not support** `async/await` directly:

1. `beforeCreate`
2. `created`
3. `beforeMount`
4. `beforeUpdate`
5. `beforeUnmount`
6. `errorCaptured`
7. `renderTracked`
8. `renderTriggered`

These hooks are **synchronous** and must execute immediately.

---

## ✅ Hooks That **Can** Be `async`
The following lifecycle hooks **support** `async/await`:

1. `mounted`
2. `updated`
3. `unmounted`
4. `activated`
5. `deactivated`

### ✅ **Example: `async` inside `mounted`**
```vue
export default {
  async mounted() {
    const data = await fetchData();
    console.log("Data fetched in mounted:", data);
  }
};