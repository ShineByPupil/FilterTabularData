// ==UserScript==
// @name         本地表格数据筛选
// @name:zh-CN   本地表格数据筛选
// @name:zh-TW   本地表格數據篩選
// @name:en      Filter tabular data
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @license      GPL-3.0
// @author       ShineByPupil
// @description  获取<table>标签的表格元素，根据表头形成筛选列表，本地对数据进行筛选
// @description:zh-CN  获取<table>标签的表格元素，根据表头形成筛选列表，本地对数据进行筛选
// @description:zh-TW  獲取<table>標簽的表格元素，根據表頭形成篩選列表，本地對數據進行篩選
// @description:en  Obtain the table element of the <table> tag, form a filtering list based on the table header, and locally filter the data
// @match        *://*/*
// @icon data:image/png;base64,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
// @noframes
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let searchDialogDOM = null;
  const utils = {
    /**
     * 在数组中查找第一个空单元的索引。
     *
     * @param {Array} array - 要查找empty的数组。
     * @return {number} 第一个empty的索引，如果没有找到空单元则返回数组的长度。
     */
    findEmptyIndex: function (array) {
      // 寻找第一个空单元的索引
      const index = array.findIndex((_, i) => !(i in array));
      // 如果找到空单元，则将新元素插入
      if (index !== -1) {
        return index;
      } else {
        // 如果数组中没有空单元，则将新元素追加到数组末尾
        return array.length;
      }
    },
    messageBox: null,
    /**
     * 在屏幕上显示指定时间长度的消息。
     *
     * @param {string} message - 要显示的消息。
     * @param {number} [duration=2500] - 消息应显示的毫秒数。默认为2500毫秒。
     * @return {void} 此函数不返回值。
     */
    showMessage: function (message, duration = 2500) {
      if (!this.messageBox) {
        this.messageBox = this.createNode(
          `<div id="messageBox" class="c-message"></div>`
        );
        document.body.appendChild(this.messageBox);
      }
      this.messageBox.textContent = message;
      this.messageBox.style.display = "block"; // 显示消息

      // 设置一定时间后自动隐藏消息
      setTimeout(() => {
        this.messageBox.style.display = "none";
      }, duration);
    },
    /**
     * 从提供的模板字符串创建一个新的 DOM 节点。
     *
     * @param {string} template - 要创建节点的 HTML 模板字符串。
     * @return {Node} 新创建的 DOM 节点。
     */
    createNode: function (template) {
      const div = document.createElement("div");
      div.innerHTML = template.trim();
      return div.firstChild;
    },
  };
  /**
   * 初始化函数，用于加载表格筛选。
   *
   */
  function init() {
    window.addEventListener("load", function (event) {
      console.log("加载表格筛选");
      renderCSS();
      findTable();
    });
  }
  /**
   * 在页面上查找所有的表格，并为每个表格添加一个按钮，当点击该按钮时，会打开搜索对话框。
   * 该按钮位于表格的左上角。
   *
   * @return {void} 该函数没有返回值。
   */
  function findTable() {
    const tableList = document.querySelectorAll("table");
    if (tableList.length) {
      document.querySelectorAll("table").forEach((tableDOM) => {
        if (
          tableDOM.querySelector("thead") &&
          tableDOM.querySelector("tbody")
        ) {
          const btn = document.createElement("button");
          btn.innerHTML = "F";
          btn.title = "打开筛选弹窗";
          btn.onclick = () => showSearchDialog(tableDOM);

          tableDOM.appendChild(btn);
          tableDOM.style.position = "relative";

          const btn_style = {
            position: "absolute",
            top: "0",
            left: "0",
            with: "20px",
            height: "20px",
            lineHeight: "20px",
            padding: "0 4px",
            backgroundColor: "#fff",
            border: "1px solid #409eff",
          };
          Object.keys(btn_style).forEach((key) => {
            btn.style[key] = btn_style[key];
          });
        } else {
          console.log("没有找到表格:", tableDOM);
        }
      });
    }
  }

  const showSearchDialog = (function () {
    const weakMap = new WeakMap();

    /**
     * 从给定的表格 DOM 元素中解析表格数据。
     *
     * @param {Element} tableDOM - 要解析的表格 DOM 元素。
     * @return {Object} 包含解析后的数据、表头、过滤器映射和表单 DOM 的对象。
     */
    function parse(tableDOM) {
      let header = []; // 表头数据

      // 解析表头
      tableDOM.querySelectorAll("thead tr").forEach((trDOM) => {
        header.push(
          Array.from(trDOM.querySelectorAll("th")).map((n) => {
            return {
              label: n.textContent,
              rowspan: n.rowSpan ?? 1, // 高度
              colspan: n.colSpan ?? 1, // 宽度
            };
          })
        );
      });

      // 每次筛选时，动态解析表格数据，防止表格排序导致顺序变化
      const getData = () => {
        return Array.from(tableDOM.querySelectorAll("tbody tr")).map(
          (trDOM) => {
            return Array.from(trDOM.querySelectorAll("td")).map((n) => {
              return n.textContent;
            });
          }
        );
      };

      let dp = new Array(header.length).fill(0).map((n) => new Array()); // 多级表头结构

      header.forEach((tr, i) => {
        tr.forEach((td, j) => {
          const index = utils.findEmptyIndex(dp[i]);
          const { colspan, rowspan } = td;

          for (let k = i; k < i + rowspan; k++) {
            for (let l = index; l < index + colspan; l++) {
              dp[k][l] ??= td.label;
            }
          }
        });
      });

      let filterMap = new Map(); // 过滤器映射
      for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
          if (dp[i][j]) {
            filterMap.has(dp[i][j]) || filterMap.set(dp[i][j], new Set());
            filterMap.get(dp[i][j]).add(j);
          }
        }
      }

      const formDOM = renderForm({ filterMap, getData, tableDOM });

      return weakMap
        .set(tableDOM, { header, filterMap, formDOM })
        .get(tableDOM);
    }

    return function (tableDOM) {
      if (!searchDialogDOM) {
        searchDialogDOM = renderDialog();
        document.body.appendChild(searchDialogDOM);
      }
      const { formDOM } = weakMap.has(tableDOM)
        ? weakMap.get(tableDOM)
        : parse(tableDOM);

      const content = searchDialogDOM.querySelector(".content");

      content.childNodes.forEach((node) => {
        content.removeChild(node);
      });
      content.appendChild(formDOM);
      searchDialogDOM._show();
    };
  })();

  /**
   * 渲染一个带有搜索功能的对话框。
   *
   * @return {HTMLElement} 渲染的对话框。
   */
  function renderDialog() {
    // 主体
    const dialog = utils.createNode(`
      <div id="searchDialog" style="display: none">
        <div class="searchDialog__header" draggable="true">
          <label class="searchDialog__title">搜索</label>
          <span class="closeBtn">✕</span>
        </div>
  
        <div class="content scroll-bar"></div>
  
        <div class="searchDialog__footer">
          <label>
            <input class="searchDialog__notClose" type="checkbox" checked/>
            <span style="margin-left: 4px">查询后不关闭</span>
          </label>
          <input type="button" class="resetBtn" value="重置"></input>
          <input type="button" class="closeBtn" value="取消"></input>
          <input type="button" class="confirmBtn primary" value="确定"></input>
        </div>
      </div>
    `);
    const header = dialog.querySelector(".searchDialog__header");

    // 方法
    dialog._show = () => {
      dialog.style.display = "block";
      dialog.style.left = "calc(50% - 15vw)";
      dialog.style.top = "10vh";
      dialog.classList.remove("fade-out");
      dialog.classList.add("fade-in");
    };
    dialog._hidden = () => {
      dialog.classList.add("fade-out");
      dialog.classList.remove("fade-in");
      dialog.onanimationend = () => {
        dialog.style.display = "none";
        dialog.onanimationend = null;
      };
    };

    // 事件
    dialog.addEventListener("click", (event) => {
      const {
        target,
        target: { className, tagName },
      } = event;

      if (className.includes("closeBtn")) {
        // 关闭
        dialog._hidden();
      } else if (className.includes("resetBtn")) {
        // 重置
        document.dispatchEvent(
          new CustomEvent("btnEvent", { detail: { type: "reset" } })
        );
      } else if (className.includes("confirmBtn")) {
        // 确定
        const notClose = dialog.querySelector(
          "input[type=checkbox].searchDialog__notClose"
        ).checked;
        document.dispatchEvent(
          new CustomEvent("btnEvent", { detail: { type: "confirm", notClose } })
        );
      } else if (tagName === "INPUT" && target.type === "checkbox") {
        target.parentElement.classList.toggle("active");
      }
    });
    // 监听键盘按下事件
    document.addEventListener("keydown", (event) => {
      if (dialog.style.display === "block" && event.key === "Escape")
        dialog._hidden();
    });

    let offsetX, offsetY;
    header.addEventListener("dragstart", (event) => {
      event.dataTransfer.effectAllowed = "move";

      // 获取拖动开始时鼠标相对于拖动元素的偏移
      offsetX = event.clientX - header.getBoundingClientRect().left;
      offsetY = event.clientY - header.getBoundingClientRect().top;
    });
    header.addEventListener("drag", function (event) {
      if (event.clientX && event.clientY) {
        // 计算拖动后的位置
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;

        // 设置拖动元素的新位置
        dialog.style.left = x + "px";
        dialog.style.top = y + "px";
      } else {
        dialog.style.left = "calc(50% - 15vw)";
        dialog.style.top = "10vh";
      }
    });
    header.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    return dialog;
  }
  /**
   * 根据提供的数据和表格 DOM 渲染一个带有筛选选项的表单。
   *
   * @param {Object} filterMap - 筛选选项的映射。
   * @param {Array} data - 用于筛选的数据。
   * @param {HTMLElement} tableDOM - 表格的 DOM 元素。
   * @return {HTMLElement} 带有筛选选项的表单的 DOM 元素。
   */
  function renderForm({ filterMap, getData, tableDOM }) {
    const formDOM = utils.createNode(`
      <article class="filter_form">
        <span class="add">添加</span>
  
        <form></form>
      </article>
    `);
    const inputDOM = utils.createNode(`
      <div class="form-example active">
        <input type="checkbox" checked>

        <select>
          <option label="AND" value="AND"></option>
          <option label="OR" value="OR"></option>
          <option label="NOT" value="NOT"></option>
        </select>
  
        <select>
        ${[...filterMap.keys()]
          .map((n) => `<option label="${n}" value="${n}"></option>`)
          .join("")}
        </select>
  
        <input type="text"/>
  
        <span class="del">删除</span>
      </div>
    `);
    const form = formDOM.querySelector("form");

    /**
     * 验证表单，检查所有输入字段是否有值。
     *
     * @return {Promise} 如果所有输入字段都有值，则解析；否则拒绝
     */
    function validate() {
      let flag = true;

      form.childNodes.forEach((node) => {
        const [checkbox, , , input] = node.children;
        if (checkbox.checked && !input.value) {
          flag = false;
          input.classList.add("error", "shake");
        } else {
          input.classList.remove("error");
        }
      });

      return new Promise((resolve, reject) => {
        if (flag) {
          resolve();
        } else {
          utils.showMessage("表单验证未通过");
          reject(new Error("表单验证未通过"));
        }
      });
    }
    /**
     * 从表单中获取过滤规则。
     *
     * @return {Object} 包含过滤规则的对象。该对象有三个属性：
     *                  - rulse_AND：表示并且过滤规则的数组。每个对象有两个属性：
     *                    - keyword：表示要过滤的关键字的字符串。
     *                    - colIndexs：表示要过滤的列索引的数组。
     *                  - rulse_OR：表示或者过滤规则的数组。结构与rulse_AND相同。
     *                  - rulse_NOT：表示非过滤规则的数组。结构与rulse_AND相同。
     */
    function getRules() {
      const rulse_AND = [];
      const rulse_OR = [];
      const rulse_NOT = [];

      form.childNodes.forEach((node) => {
        const [checkbox, select1, select2, input] = node.children;

        if (checkbox.checked) {
          switch (select1.value) {
            case "AND":
              rulse_AND.push({
                keyword: input.value,
                colIndexs: Array.from(filterMap.get(select2.value)),
              });
              break;
            case "OR":
              rulse_OR.push({
                keyword: input.value,
                colIndexs: Array.from(filterMap.get(select2.value)),
              });
              break;
            case "NOT":
              rulse_NOT.push({
                keyword: input.value,
                colIndexs: Array.from(filterMap.get(select2.value)),
              });
              break;
          }
        }
      });

      return {
        rulse_AND,
        rulse_OR,
        rulse_NOT,
      };
    }
    /**
     * 根据给定的规则确定表格行是否可见。
     *
     * @param {Array} trData - 表格行数据。
     * @param {Object} rules - 过滤规则。
     * @param {Array} rules.rulse_AND - AND 过滤规则。
     * @param {Array} rules.rulse_OR - OR 过滤规则。
     * @param {Array} rules.rulse_NOT - NOT 过滤规则。
     * @param {Object} rules.rulse_AND[].rule - AND 过滤规则。
     * @param {string} rules.rulse_AND[].rule.keyword - 过滤关键字。
     * @param {Array} rules.rulse_AND[].rule.colIndexs - 过滤列索引。
     * @param {Object} rules.rulse_OR[].rule - OR 过滤规则。
     * @param {string} rules.rulse_OR[].rule.keyword - 过滤关键字。
     * @param {Array} rules.rulse_OR[].rule.colIndexs - 过滤列索引。
     * @param {Object} rules.rulse_NOT[].rule - NOT 过滤规则。
     * @param {string} rules.rulse_NOT[].rule.keyword - 过滤关键字。
     * @param {Array} rules.rulse_NOT[].rule.colIndexs - 过滤列索引。
     * @return {boolean} 如果表格行可见，则为 true，否则为 false。
     */
    const isVisible = function (trData, rules) {
      const { rulse_AND, rulse_OR, rulse_NOT } = rules;

      const isVisible_AND =
        rulse_AND.length &&
        rulse_AND.every((rule) => {
          const { keyword, colIndexs } = rule;
          return colIndexs.some((index) => trData?.[index]?.includes(keyword));
        });
      const isVisible_OR =
        rulse_OR.length &&
        rulse_OR.some((rule) => {
          const { keyword, colIndexs } = rule;
          return colIndexs.some((index) => trData?.[index]?.includes(keyword));
        });
      const isVisible_NOT = rulse_NOT.length
        ? rulse_NOT.every((rule) => {
            const { keyword, colIndexs } = rule;
            return !colIndexs.some((index) =>
              trData?.[index]?.includes(keyword)
            );
          })
        : true;

      return (
        isVisible_NOT &&
        (rulse_AND.length || rulse_OR.length
          ? isVisible_AND || isVisible_OR
          : true)
      );
    };
    /**
     * 处理根据给定规则筛选表格行。如果提供了规则，
     * 则根据规则筛选表格行，并显示成功消息以及筛选行数。
     * 如果没有提供规则，则重置所有表格行的可见性，并显示成功消息以及全部行数。
     *
     * @return {void} 此函数不返回任何内容。
     */
    function handleFilter() {
      const data = getData();
      const rules = getRules();
      const trList = Array.from(tableDOM.querySelector("tbody").children);
      let count = 0;

      // 筛选
      data.forEach((trData, i) => {
        if (isVisible(trData, rules)) {
          trList[i].style.visibility = "visible";
          count++;
        } else {
          trList[i].style.visibility = "collapse";
        }
      });

      utils.showMessage(`搜索成功,一共查询出 ${count} 数据`);
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      validate()
        .then(() => {
          handleFilter();
          searchDialogDOM._hidden();
        })
        .catch((e) => {
          console.error(e.message);
        });
    });
    formDOM.addEventListener("wheel", (event) => {
      if (event.target.tagName === "SELECT") {
        event.preventDefault();

        const length = event.target.options.length;
        const index = event.target.selectedIndex;
        const direction = event.wheelDeltaY > 0 ? "up" : "down";

        event.target.selectedIndex =
          direction === "up"
            ? index === 0
              ? length - 1
              : index - 1
            : index === length - 1
            ? 0
            : index + 1;
      }
    });
    formDOM.addEventListener("click", (event) => {
      if (event.target.className.includes("add")) {
        form.appendChild(inputDOM.cloneNode(true));
      } else if (event.target.className.includes("del")) {
        // 删除规则
        event.target.parentNode.remove();
      }
    });
    formDOM.addEventListener("animationend", (event) => {
      if (event.target.className.includes("shake")) {
        event.target.classList.remove("shake");
      }
    });
    formDOM.addEventListener("input", (event) => {
      if (event.target.tagName === "INPUT") {
        event.target.value
          ? event.target.classList.remove("error")
          : event.target.classList.add("error");
      }
    });
    document.addEventListener("btnEvent", (event) => {
      if (formDOM.parentElement) {
        switch (event?.detail?.type) {
          case "confirm":
            validate()
              .then(() => {
                handleFilter();
                if (!event?.detail?.notClose) {
                  searchDialogDOM._hidden();
                }
              })
              .catch((e) => {
                console.error(e.message);
              });
            break;
          case "reset":
            form.innerHTML = "";
            break;
        }
      }
    });

    return formDOM;
  }
  // 放弃。todo （不定高）虚拟滚动
  function renderTable(header, dataSource) {
    const container = utils.createNode(`
      <div class="c-table">
        <div class="c-table__content scroll-bar">
          <table>
            <colgroup></colgroup>
  
            <thead></thead>
  
            <tbody></tbody>
          </table>
        </div>
      </div>
    `);

    const tableDOM = container.querySelector("table");
    const colgroupDOM = container.querySelector("colgroup");
    const thDOM = container.querySelector("thead");
    const tbDOM = container.querySelector("tbody");

    // 根据表头计算colgroup
    let i = 23;
    while (i--) {
      let colDOM = document.createElement("col");
      colDOM.setAttribute("width", "100px");
      colgroupDOM.appendChild(colDOM);
    }
    window.colgroupDOM = colgroupDOM;
    tableDOM.style.width = 23 * 100 + "px";

    // 渲染表头
    header.forEach((tr) => {
      let trDOM = document.createElement("tr");
      thDOM.appendChild(trDOM);

      tr.forEach((td) => {
        let thDOM = document.createElement("th");
        trDOM.appendChild(thDOM);
        thDOM.innerHTML = td.label;

        thDOM.rowspan = td.rowspan;
        thDOM.colspan = td.colspan;
        thDOM.setAttribute("rowspan", td.rowspan);
        thDOM.setAttribute("colspan", td.colspan);
      });
    });

    // 渲染表体
    dataSource.forEach((td) => {
      let trDOM = document.createElement("tr");

      trDOM.innerHTML = td.map((n) => `<td><p>${n}</p></td>`).join("");
      tbDOM.appendChild(trDOM);
    });

    return container;
  }
  /**
   * 渲染搜索对话框和页面上其他元素的CSS样式。
   *
   * @return {void} 此函数不返回任何内容。
   */
  function renderCSS() {
    let style = utils.createNode(`
    <style>
      /* 滚动条样式 */
      .scroll-bar {
        overflow-y: scroll;
      }
      .scroll-bar::-webkit-scrollbar {
        margin: 10px;
        height: 10px;
        width: 10px;
        border: 2px solid #333; /* 设置滚动条的边框颜色 */
      }
      .scroll-bar::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }
      .scroll-bar::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
      }
      .scroll-bar::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
  
      /* 弹窗样式 */
      #searchDialog {
        font-size: 12px;
        font-family: "Microsoft YaHei", sans-serif;
        display: flex;
        z-index: 9999;
        flex-direction: column;
        width: 30vw;
        min-width: 600px;
        box-sizing: border-box;
        position: fixed;
        background-color: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
      #searchDialog .searchDialog__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        font-size: 18px;
      }
      #searchDialog .searchDialog__header span {
        transition: color 0.3s;
        cursor: pointer;
        font-size: 20px;
      }
      #searchDialog .searchDialog__header span:hover {
        color: red;
      }
      #searchDialog .content {
        margin: 20px;
        padding: 0 10px;
        flex: 1;
        max-height: 400px;
        overflow-y: auto;
        overflow-x: hidden;
      }
      #searchDialog .searchDialog__footer {
        padding: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        user-select: none;
      }
      #searchDialog .searchDialog__footer > label {
        display: flex;
      }
      #searchDialog .searchDialog__footer > label > * {
        cursor: pointer;
      }
      /* CSS 过渡效果 */
      #searchDialog.fade-in {
        animation: fadeIn 0.3s;
      }
      #searchDialog.fade-out {
        animation: fadeOut 0.3s;
      }
  
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
  
      .c-message {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 20px;
        background-color: #333;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        display: none; /* 默认隐藏 */
      }
  
      /* 表单样式 */
      #searchDialog article.filter_form {
        font-size: 12px;
      }
      #searchDialog article.filter_form form {
        position: relative;
        margin-top: 4px;
      }
      #searchDialog article.filter_form .add,
      #searchDialog article.filter_form .del {
        user-select: none;
        cursor: pointer;
      }
      #searchDialog article.filter_form form .form-example {
        display: flex;
        align-items: center;
        margin: 0 -4px;
        margin-bottom: 6px;
      }
      #searchDialog article.filter_form form .form-example > * {
        margin: 0 4px;
      }
      #searchDialog article.filter_form form .form-example input[type='text'] {
        flex: 1;
      }
      #searchDialog article.filter_form form .form-example input[type='text'].error {
        border-color: red;
      }
      #searchDialog article.filter_form form .form-example input[type='text'].shake {
        animation: shake 0.6s ease-in-out 1;
      }
      #searchDialog article.filter_form form .form-example:not(.active) * {
        border-color: #d9d9d9;
        color: #d9d9d9;
      }
      @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-6px); }
        50% { transform: translateX(4px); }
        75% { transform: translateX(-2px); }
        100% { transform: translateX(0); }
      }
  
      /* 组件样式 */
      #searchDialog select,
      #searchDialog input[type='text'] {
        box-sizing: border-box;
        height: 32px;
        padding: 4px 11px;
        border-radius: 4px;
        border: 1px solid #d9d9d9;
        transition: all 0.3s;
      }
      #searchDialog select:focus,
      #searchDialog input:focus {
        outline: none;
        border-color: #4096ff;
        border-inline-end-width: 1px;
      }
      #searchDialog select:hover,
      #searchDialog input:hover {
        border-color: #4096ff;
        border-inline-end-width: 1px;
      }
  
      #searchDialog input[type='button'] {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-decoration: none;
        cursor: pointer;
        margin-left: 10px;
      }
      #searchDialog input[type='button']:hover {
        background-color: #f5f7fa;
        border-color: #409eff;
        color: #409eff;
      }
      #searchDialog input[type='button'].primary {
        background-color: #409eff;
        border-color: #409eff;
        color: #fff;
      }
      #searchDialog input[type='button'].primary:hover {
        background-color: #66b1ff;
        border-color: #66b1ff;
      }
    </style>
    `);

    document.head.appendChild(style);
  }

  init();
})();
