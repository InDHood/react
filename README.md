<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" style="height:50px; float: right;" />

# Learning React

Step 1: Install React thru Vite<br />
`npm create vite@latest`
and follow the instructions

Step 2: Install Tailwindcss<br />
`npm install -D tailwindcss postcss autoprefixer`
and follow the instructions [here](https://tailwindcss.com/docs/guides/vite#react)

---

## Actions (Assignment)

_Todo_

- Next Task ---DONE
- Avoid Repition of Tasks on Task Creation
- Undo Completed Task ---DONE
- Make the check circle the clickable part ---DONE
- Implement Vue version

## Up Next

- Build and Deployment
- Deployment on Firebase
- API access
- State Management with Redux Toolkit(RTK) and React Query

---

---

---

---

Step 3: Install Vue Router<br />
`npm install vue-router@4`

Step 4: Create a route folder with an index file

```
import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/Home.vue";
import About from "/src/pages/About.vue";
import Contact from "/src/pages/Contact.vue";
import NotFound from "/src/pages/404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
```

Step 5: Create a components

Step 6: Create a pages

### Running

To run, use command
`npm run dev`

To stop
`Ctrl C`
