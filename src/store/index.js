import { decorate, observable, computed, action } from "mobx";

class Store {
  tasks = [
    { id: 0, title: "Create app", done: false },
    { id: 1, title: "Add todos interactive", done: true },
    { id: 2, title: "Migrate to MobX", done: false }
  ];

  get activeTasks() {
    return this.tasks.filter(el => !el.done);
  }

  get sortedTasks() {
    return this.tasks.sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  }

  addTask(text) {
    this.tasks.push({ id: this.tasks.length, title: text, done: false });
  }

  doneT(id) {
    this.tasks = this.tasks.map(el =>
      el.id === id ? { ...el, done: true } : el
    );
  }

  delT(id) {
    this.tasks = this.tasks.filter(el => el.id !== id);
  }
}

Store = decorate(Store, {
  tasks: observable,
  activeTasks: computed,
  sortedTasks: computed,
  addTask: action,
  delT: action,
  doneT: action
});

export default new Store();
