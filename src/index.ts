import { startApp } from "./bootStrap";

startApp().catch((err) => {
  throw new Error(`App failed to start: ${err.message}`); 
});
