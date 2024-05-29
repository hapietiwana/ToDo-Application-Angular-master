import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTodoComponent } from './item-todo.component';

describe('ItemTodoComponent', () => {
  let component: ItemTodoComponent;
  let fixture: ComponentFixture<ItemTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTodoComponent]
    });
    fixture = TestBed.createComponent(ItemTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
