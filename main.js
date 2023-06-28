"use strict";

const createTable = () => document.createElement("table");
const createThead = () => document.createElement("thead");
const createTbody = () => document.createElement("tbody");
const createTr = () => document.createElement("tr");
const createTh = () => document.createElement("th");
const createTd = () => document.createElement("td");

const minInput = document.querySelector("#min-num");
const maxInput = document.querySelector("#max-num");
const validP = document.querySelector(".valid-p");
const btn = document.querySelector(".btn");

const renderTable = (min = 1, max = 10) => {
  const table = createTable();
  const thead = createThead();
  const tbody = createTbody();
  const tr = createTr();
  const th = createTh();
  const wrapper = document.querySelector(".table-wrap");
  const tableNodeExist = document.querySelector("table");

  tableNodeExist && wrapper.removeChild(tableNodeExist);
  wrapper.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
  thead.appendChild(tr);
  tr.appendChild(th);
  th.textContent = "Multiplication table";
  table.className = "black-border";

  for (let i = 0, colInitial = --min; i <= max - min; i++, colInitial++) {
    const mainTr = createTr();
    tbody.appendChild(mainTr);

    for (let j = 0, rowInitial = min; j <= max - min; j++, rowInitial++) {
      const tempI = i === 0 ? i + min + 1 : i + min;
      const tempJ = j === 0 ? j + min + 1 : j + min;
      const td = createTd();
      mainTr.appendChild(td);
      td.className = "black-border centered-text";

      if (i === 0 && j === 0) {
        td.textContent = "x";
      } else if (i === 0 && j > 0) {
        td.textContent = rowInitial;
      } else if (i > 0 && j === 0) {
        td.textContent = colInitial;
      } else {
        td.textContent = tempJ * tempI;
      }
    }
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const minValue = +minInput.value;
  const maxValue = +maxInput.value;

  if (minValue > maxValue) {
    validP.textContent = "Initial value need to be higher than max!";
  } else {
    validP.textContent = "Values is valid!";
    renderTable(minValue, maxValue);
  }
});

renderTable(1, 10); //default render 10x10
