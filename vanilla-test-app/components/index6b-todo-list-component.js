class ToDoListComponent extends HTMLElement {
    
    connectedCallback() {
      this.render();
    }
    
    static get observedAttributes() {
      return ['todos'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      //this.clear();
      this.render();
    }

    clear() {
      for (const child of this.children) {
        child.remove();
      }
    }
    
    render() {
      this.clear();
      
      // Create list element
      const todosArr = JSON.parse(this.attributes.todos.value || '[]');
      const todoEls = todosArr
        .map(todo => {
          const checkboxEl = document.createElement('input');
          checkboxEl.type = "checkbox";
         
          console.log(todo);
          // This doesn't work
          checkboxEl.addEventListener('change', todo.onChange);
          // This does work
          // checkboxEl.addEventListener('change', () => toggleTodoItem(todo.id))
          checkboxEl.checked = todo.completed;

          const liEl = document.createElement('li');
          liEl.append(checkboxEl);
          liEl.append(todo.name);
          return liEl;
        });
      
      const ulEl = document.createElement('ul');
      for (const liEl of todoEls) {
        ulEl.append(liEl);
      }
      
      // Add header
      const header = document.createElement('h1');
      header.innerText = this.getAttribute('caption') + " - " + todosArr.filter(todo => todo.completed).length;

      // Reconstruct logic
      this.append(header);
      this.append(ulEl);
    }
    
  }

  customElements.define('todo-list-component', ToDoListComponent);


  