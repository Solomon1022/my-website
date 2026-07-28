// js/vocab.js
(function() {
  const STORAGE_GLOBAL = 'vocabulary_global';      // 总单词本
  const PREFIX_CONV = 'vocab_conversation_';       // 对话单词本前缀

  function getGlobalVocab() {
    return JSON.parse(localStorage.getItem(STORAGE_GLOBAL) || '[]');
  }

  function setGlobalVocab(arr) {
    localStorage.setItem(STORAGE_GLOBAL, JSON.stringify(arr));
  }

  function getConversationVocab(convId) {
    return JSON.parse(localStorage.getItem(PREFIX_CONV + convId) || '[]');
  }

  function setConversationVocab(convId, arr) {
    localStorage.setItem(PREFIX_CONV + convId, JSON.stringify(arr));
  }

  // 获取当前对话ID（依赖 learn.html 中的全局变量）
  function getCurrentConversationId() {
    if (typeof currentConversationId !== 'undefined') {
      return currentConversationId;
    }
    return null;
  }

  // ========== 添加到单词本（同时加入总库和当前对话库） ==========
  window.addToVocabulary = function(word, convId) {
    if (!convId) convId = getCurrentConversationId();
    const globalVocab = getGlobalVocab();
    if (!globalVocab.includes(word)) {
      globalVocab.push(word);
      setGlobalVocab(globalVocab);
    }

    if (convId) {
      const convVocab = getConversationVocab(convId);
      if (!convVocab.includes(word)) {
        convVocab.push(word);
        setConversationVocab(convId, convVocab);
      }
    }

    if (window.showToast) window.showToast(`✅ "${word}" 已添加到单词本`);

    // 刷新左右面板
    refreshSidebar();
    refreshLeftCard();
  };

  // ========== 右侧侧边栏 ==========
  const sidebar = document.getElementById('vocabSidebar');
  const openBtn = document.getElementById('openVocabSidebar');
  const closeBtn = document.getElementById('toggleVocabSidebar');
  const sidebarList = document.getElementById('vocabSidebarList');

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      sidebar.classList.add('open');
      renderSidebarList();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  }

  function renderSidebarList() {
    const convId = getCurrentConversationId();
    if (!convId) {
      sidebarList.innerHTML = '<p style="color:#888;text-align:center;">未找到当前对话</p>';
      return;
    }
    const words = getConversationVocab(convId);
    sidebarList.innerHTML = '';
    if (words.length === 0) {
      sidebarList.innerHTML = '<p style="color:#888;text-align:center;">暂无单词</p>';
      return;
    }
    words.forEach((word, idx) => {
      const div = document.createElement('div');
      div.className = 'vocab-item';
      div.innerHTML = `
        <div>
          <span class="word">${word}</span>
        </div>
        <button class="del-word" data-index="${idx}">×</button>
      `;
      sidebarList.appendChild(div);
    });
    sidebarList.querySelectorAll('.del-word').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = e.target.dataset.index;
        const convId = getCurrentConversationId();
        const words = getConversationVocab(convId);
        words.splice(index, 1);
        setConversationVocab(convId, words);
        renderSidebarList();
        refreshLeftCard();  // 总单词本可能也需要减掉（如果全局中没有其他对话使用该单词）
      });
    });
  }

  function refreshSidebar() {
    if (sidebar && sidebar.classList.contains('open')) {
      renderSidebarList();
    }
  }

  // ========== 左侧总单词本卡片 ==========
  const leftList = document.getElementById('vocabWordsList');
  if (leftList) renderLeftCard();

  function renderLeftCard() {
    if (!leftList) return;
    const globalVocab = getGlobalVocab();
    leftList.innerHTML = '';
    if (globalVocab.length === 0) {
      leftList.innerHTML = '<p style="color:#888;text-align:center;">暂无单词</p>';
      return;
    }
    globalVocab.forEach((word, idx) => {
      const div = document.createElement('div');
      div.className = 'word-row';
      div.innerHTML = `
        <span class="word-text">${word}</span>
        <button class="del-word" data-index="${idx}">×</button>
      `;
      leftList.appendChild(div);
    });
    leftList.querySelectorAll('.del-word').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = e.target.dataset.index;
        const globalVocab = getGlobalVocab();
        globalVocab.splice(index, 1);
        setGlobalVocab(globalVocab);
        renderLeftCard();
        refreshSidebar();  // 同步右侧（但右侧是对话级别，此处可保持原样）
      });
    });
  }

  function refreshLeftCard() {
    if (leftList) renderLeftCard();
  }

  // ========== 自动导入开关（左侧和右侧分别存储设置） ==========
  const autoToggleRight = document.getElementById('autoVocabToggle');
  const autoToggleLeft = document.getElementById('autoVocabToggleLeft');

  function handleAutoToggle(checkbox, key) {
    localStorage.setItem(key, checkbox.checked);
  }

  if (autoToggleRight) {
    const key = 'autoVocabRight';
    autoToggleRight.addEventListener('change', () => handleAutoToggle(autoToggleRight, key));
    autoToggleRight.checked = localStorage.getItem(key) === 'true';
  }

  if (autoToggleLeft) {
    const key = 'autoVocabLeft';
    autoToggleLeft.addEventListener('change', () => handleAutoToggle(autoToggleLeft, key));
    autoToggleLeft.checked = localStorage.getItem(key) === 'true';
  }

  // 在切换对话时，右侧面板自动刷新（由 learn.html 中监听 currentConversationId 变化触发）
  window.addEventListener('conversationChanged', () => {
    refreshSidebar();
  });
})();