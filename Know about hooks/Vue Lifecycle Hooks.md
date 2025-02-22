# Vue 3 Lifecycle Hooks (Options API)

## 🔹 Overview
Vue 3 provides various lifecycle hooks to manage different stages of a component's lifecycle. Understanding what is available in each hook helps in writing clean and efficient code.

---

## 📌 Lifecycle Hooks & What You Can Use

| Hook | `data` | `computed` | `methods` | `props` | `ref` (`template`) |
|------|--------|-----------|-----------|---------|---------------------|
| **beforeCreate** | ❌ Not available | ❌ Not available | ❌ Not available | ❌ Not available | ❌ Not available |
| **created** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ❌ Not available |
| **beforeMount** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ❌ Not available |
| **mounted** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **beforeUpdate** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **updated** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **activated** (KeepAlive) | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **deactivated** (KeepAlive) | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **beforeUnmount** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **unmounted** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **errorCaptured** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **renderTracked** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |
| **renderTriggered** | ✅ Available | ✅ Available | ✅ Available | ✅ Available | ✅ Available |

---

## 🔥 **Understanding Each Hook**

### 1️⃣ **beforeCreate**
- Vue instance is initializing.
- ❌ **Cannot access `data`, `computed`, `methods`, `props`, or `refs`.**
- ✅ **Can modify component options before Vue initializes.**

#### ✅ **Real-World Use Case**
Modify `data` dynamically before Vue initializes:
```vue
<script>
export default {
  beforeCreate() {
    const userTheme = localStorage.getItem("theme") || "light";
    this.$options.data = function () {
      return { theme: userTheme };
    };
  }
};
</script>
```

---

### 2️⃣ **created**
- Vue has initialized `data`, `computed`, `methods`, and `props`.
- ❌ **Refs (`this.$refs`) are NOT available.**
- ✅ **Great for making API calls or setting up reactive variables.**

#### ✅ **Example:** Fetch API Data
```vue
<script>
export default {
  data() {
    return { user: null };
  },
  created() {
    fetch("https://api.example.com/user")
      .then(res => res.json())
      .then(data => this.user = data);
  }
};
</script>
```

---

### 3️⃣ **beforeMount**
- **Template is compiled, but not yet inserted into the DOM.**
- ✅ **Can access `data`, `computed`, and `methods`, but `this.$el` is NOT available yet.**

---

### 4️⃣ **mounted**
- ✅ **Everything is available, including DOM elements (`this.$el`, `refs`).**
- ✅ **Best place for DOM manipulations and event listeners.**

#### ✅ **Example:** Focus an input field on mount
```vue
<template>
  <input ref="inputField" type="text" />
</template>
<script>
export default {
  mounted() {
    this.$refs.inputField.focus();
  }
};
</script>
```

---

### 5️⃣ **beforeUpdate & updated**
- `beforeUpdate`: Runs **before** Vue updates the DOM.
- `updated`: Runs **after** Vue updates the DOM.
- ✅ **Use for debugging reactivity issues.**

#### ✅ **Example:** Logging DOM changes
```vue
export default {
  updated() {
    console.log("DOM updated with new data:", this.$el.innerHTML);
  }
};
```

---

### 6️⃣ **beforeUnmount & unmounted**
- `beforeUnmount`: **Before the component is removed from the DOM.**
- `unmounted`: **After the component is removed from the DOM.**
- ✅ **Best place for cleanup (e.g., removing event listeners, clearing intervals).**

#### ✅ **Example:** Cleanup event listener
```vue
export default {
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      console.log("Window resized");
    }
  }
};
```

---

### 7️⃣ **errorCaptured**
- ✅ **Catches errors from child components.**
- ✅ **Useful for logging or custom error handling.**

#### ✅ **Example:** Global error logging
```vue
export default {
  errorCaptured(err, vm, info) {
    console.error("Error captured:", err, "in", vm, "info:", info);
    return false; // Prevents error propagation
  }
};
```

---

## 🎯 **Summary**
- **Use `beforeCreate`** to modify component options early.
- **Use `created`** to fetch data but not manipulate the DOM.
- **Use `mounted`** for DOM manipulations.
- **Use `beforeUpdate / updated`** to debug reactivity changes.
- **Use `beforeUnmount / unmounted`** to clean up resources.
- **Use `errorCaptured`** for error handling in child components.

🚀 **Master these hooks to write better Vue applications!**

