const state = {
  currentUser: {
    username: "wanderinglight",
    displayName: "Mila Jensen",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  stories: [
    {
      id: "you",
      user: "You",
      avatar: "https://i.pravatar.cc/150?img=32",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
      caption: "Sunrise scouting for tomorrow's photo walk.",
    },
    {
      id: "maya",
      user: "maya.sketch",
      avatar: "https://i.pravatar.cc/150?img=65",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4693725f82?auto=format&fit=crop&w=900&q=80",
      caption: "Painting the ocean breeze.",
    },
    {
      id: "analog",
      user: "analogdreams",
      avatar: "https://i.pravatar.cc/150?img=12",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
      caption: "Darkroom magic happening now.",
    },
    {
      id: "kevin",
      user: "kevin.lens",
      avatar: "https://i.pravatar.cc/150?img=27",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      caption: "Peak trails with the crew.",
    },
    {
      id: "esme",
      user: "esme.codes",
      avatar: "https://i.pravatar.cc/150?img=47",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      caption: "Finishing the new portfolio theme tonight!",
    },
    {
      id: "kai",
      user: "kai.motion",
      avatar: "https://i.pravatar.cc/150?img=33",
      image:
        "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=900&q=80",
      caption: "Drone chase across the coastline.",
    },
  ],
  posts: [
    {
      id: "post-1",
      user: "analogdreams",
      displayName: "Analog Dreams",
      avatar: "https://i.pravatar.cc/150?img=12",
      location: "Portland, USA",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1080&q=80",
      caption:
        "Color grading late into the night. The neon reflections from outside made this scene glow just right.",
      likes: 1290,
      liked: false,
      saved: false,
      time: "2 hours ago",
      tags: ["#editing", "#workflow", "#nightshift"],
      comments: [
        {
          user: "esme.codes",
          avatar: "https://i.pravatar.cc/150?img=47",
          text: "The lighting in this is a vibe!",
        },
        {
          user: "lenalights",
          avatar: "https://i.pravatar.cc/150?img=16",
          text: "Teach us your grading secrets please 🙌",
        },
      ],
    },
    {
      id: "post-2",
      user: "maya.sketch",
      displayName: "Maya Rodríguez",
      avatar: "https://i.pravatar.cc/150?img=65",
      location: "Lisbon, Portugal",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4693725f82?auto=format&fit=crop&w=1080&q=80",
      caption:
        "Sketching with the Atlantic breeze as a soundtrack. These colors hit different at golden hour.",
      likes: 987,
      liked: true,
      saved: true,
      time: "5 hours ago",
      tags: ["#artflow", "#sketchbook", "#sunsetpalette"],
      comments: [
        {
          user: "analogdreams",
          avatar: "https://i.pravatar.cc/150?img=12",
          text: "Textures are gorgeous!",
        },
        {
          user: "filmfolk",
          avatar: "https://i.pravatar.cc/150?img=36",
          text: "Frame this one!",
        },
      ],
    },
    {
      id: "post-3",
      user: "kevin.lens",
      displayName: "Kevin Lin",
      avatar: "https://i.pravatar.cc/150?img=27",
      location: "Banff National Park",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&q=80",
      caption:
        "Fog hugging the valley like a dream. Hiked three hours for this perspective &mdash; worth every step.",
      likes: 2043,
      liked: false,
      saved: false,
      time: "Yesterday",
      tags: ["#mountainlight", "#travelwithfriends"],
      comments: [
        {
          user: "skylarwanders",
          avatar: "https://i.pravatar.cc/150?img=53",
          text: "Need this as a print!",
        },
      ],
    },
  ],
  suggestions: [
    {
      user: "galleryhues",
      reason: "Followed by analogdreams",
      avatar: "https://i.pravatar.cc/150?img=21",
    },
    {
      user: "colorplay",
      reason: "Popular in design",
      avatar: "https://i.pravatar.cc/150?img=41",
    },
    {
      user: "midnightbeats",
      reason: "Live now",
      avatar: "https://i.pravatar.cc/150?img=30",
    },
  ],
  tags: [
    { tag: "#neonnoir", posts: "12.1K" },
    { tag: "#streetstories", posts: "8.6K" },
    { tag: "#colorgrade", posts: "5.2K" },
    { tag: "#sketchflow", posts: "3.4K" },
  ],
  notifications: [
    {
      id: "notif-1",
      user: "colorplay",
      avatar: "https://i.pravatar.cc/150?img=41",
      message: "liked your photo",
      time: "3m",
      unread: true,
      preview:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "notif-2",
      user: "galleryhues",
      avatar: "https://i.pravatar.cc/150?img=21",
      message: "started following you",
      time: "21m",
      unread: true,
      preview: null,
    },
    {
      id: "notif-3",
      user: "midnightbeats",
      avatar: "https://i.pravatar.cc/150?img=30",
      message: "mentioned you in a comment",
      time: "1h",
      unread: false,
      preview: null,
    },
  ],
  conversations: [
    {
      id: "conv-1",
      user: {
        username: "galleryhues",
        displayName: "Naledi",
        avatar: "https://i.pravatar.cc/150?img=21",
      },
      lastMessage: "Let's stream the edit later!",
      messages: [
        { from: "them", text: "How's the preset coming along?" },
        { from: "me", text: "Tweaking the highlights now." },
        { from: "them", text: "Let's stream the edit later!" },
      ],
    },
    {
      id: "conv-2",
      user: {
        username: "maya.sketch",
        displayName: "Maya",
        avatar: "https://i.pravatar.cc/150?img=65",
      },
      lastMessage: "Sending you the mural references",
      messages: [
        { from: "them", text: "Can you review the mural mockups?" },
        { from: "me", text: "Absolutely, drop them in the folder." },
        { from: "them", text: "Sending you the mural references" },
      ],
    },
    {
      id: "conv-3",
      user: {
        username: "analogdreams",
        displayName: "Jae",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      lastMessage: "Uploading raw files now",
      messages: [
        { from: "me", text: "Need the raw files from the shoot." },
        { from: "them", text: "Uploading raw files now" },
      ],
    },
  ],
};

const dom = {
  stories: document.getElementById("stories"),
  feed: document.getElementById("feed"),
  suggestions: document.getElementById("suggestions-list"),
  tags: document.getElementById("trending-tags"),
  notificationsPanel: document.getElementById("notifications-panel"),
  notificationsList: document.getElementById("notifications-list"),
  messagesPanel: document.getElementById("messages-panel"),
  conversationList: document.getElementById("conversation-list"),
  conversationView: document.getElementById("conversation-view"),
  storyViewer: document.getElementById("story-viewer"),
  storyViewerImg: document.getElementById("story-viewer-image"),
  storyViewerUser: document.getElementById("story-viewer-user"),
  storyViewerCaption: document.getElementById("story-viewer-caption"),
  storyProgressBar: document.getElementById("story-progress-bar"),
  createModal: document.getElementById("create-modal"),
  createForm: document.getElementById("create-post-form"),
  globalSearch: document.getElementById("global-search"),
  profilePostCount: document.getElementById("profile-post-count"),
};

let activeConversation = null;
let storyTimer = null;
let storyAnimationFrame = null;
let toastTimeout = null;

function renderStories(stories) {
  dom.stories.innerHTML = "";
  stories.forEach((story) => {
    const card = document.createElement("button");
    card.className = "story-card";
    card.innerHTML = `
      <img src="${story.avatar}" alt="${story.user}'s story" />
      <span>${story.user}</span>
    `;
    card.addEventListener("click", () => openStory(story));
    dom.stories.appendChild(card);
  });
}

function renderFeed(posts) {
  dom.feed.innerHTML = "";

  if (!posts.length) {
    const empty = document.createElement("section");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>No posts found</h3>
      <p>Try adjusting your search terms or share something new!</p>
      <button class="primary-button" data-action="create">Create a post</button>
    `;
    empty.querySelectorAll('[data-action="create"]').forEach((button) => {
      button.addEventListener("click", openCreateModal);
    });
    dom.feed.appendChild(empty);
    return;
  }

  const template = document.getElementById("post-template");
  posts.forEach((post) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    const avatar = clone.querySelector(".avatar");
    const user = clone.querySelector(".post-user");
    const meta = clone.querySelector(".post-meta");
    const image = clone.querySelector(".post-media img");
    const caption = clone.querySelector(".post-caption");
    const likes = clone.querySelector(".post-likes");
    const tags = clone.querySelector(".post-tags");
    const likeButton = clone.querySelector(".like");
    const saveButton = clone.querySelector(".save");
    const commentButton = clone.querySelector(".comment");
    const shareButton = clone.querySelector(".share");
    const commentsList = clone.querySelector(".comments-list");
    const commentForm = clone.querySelector(".comment-form");

    avatar.src = post.avatar;
    avatar.alt = `${post.displayName}'s avatar`;
    user.textContent = `${post.displayName} · @${post.user}`;
    meta.textContent = `${post.location} • ${post.time}`;
    image.src = post.image;
    image.alt = post.caption;
    caption.textContent = post.caption;
    updateLikesText(likes, post.likes);
    updateLikeState(likeButton, post.liked);
    updateSaveState(saveButton, post.saved);

    tags.innerHTML = "";
    post.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tags.appendChild(li);
    });

    commentsList.innerHTML = "";
    post.comments.forEach((comment) => {
      commentsList.appendChild(createCommentElement(comment));
    });

    likeButton.addEventListener("click", () => {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      updateLikesText(likes, post.likes);
      updateLikeState(likeButton, post.liked);
      showToast(post.liked ? "You liked this" : "Like removed");
    });

    saveButton.addEventListener("click", () => {
      post.saved = !post.saved;
      updateSaveState(saveButton, post.saved);
      showToast(post.saved ? "Saved to collections" : "Removed from saved");
    });

    commentButton.addEventListener("click", () => {
      commentForm.querySelector("input[name='comment']").focus();
    });

    shareButton.addEventListener("click", () => {
      const shareText = `${post.displayName} on ChromaShare: ${post.caption}`;
      if (navigator.share) {
        navigator
          .share({
            title: `${post.displayName} on ChromaShare`,
            text: shareText,
            url: window.location.href,
          })
          .catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).catch(() => {});
      } else {
        alert("Share copied: " + shareText);
      }
      showToast("Post ready to share!");
    });

    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = commentForm.elements.comment;
      const value = input.value.trim();
      if (!value) return;
      const newComment = {
        user: state.currentUser.username,
        avatar: state.currentUser.avatar,
        text: value,
      };
      post.comments.push(newComment);
      commentsList.appendChild(createCommentElement(newComment));
      input.value = "";
      commentsList.scrollTo({
        top: commentsList.scrollHeight,
        behavior: "smooth",
      });
      showToast("Comment added");
    });

    dom.feed.appendChild(clone);
  });
}

function createCommentElement(comment) {
  const li = document.createElement("li");
  li.className = "comment";
  li.innerHTML = `
    <img src="${comment.avatar}" alt="${comment.user}'s avatar" />
    <div class="comment-content">
      <strong>@${comment.user}</strong>
      <p>${comment.text}</p>
    </div>
  `;
  return li;
}

function updateLikesText(element, likes) {
  element.textContent = likes.toLocaleString() + " likes";
}

function updateLikeState(button, liked) {
  button.setAttribute("aria-pressed", liked);
  button.textContent = liked ? "❤" : "♡";
  button.classList.toggle("is-active", liked);
}

function updateSaveState(button, saved) {
  button.setAttribute("aria-pressed", saved);
  button.textContent = saved ? "📌" : "🔖";
  button.classList.toggle("is-active", saved);
}

function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  container.textContent = message;
  container.classList.add("is-visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    container.classList.remove("is-visible");
  }, 2400);
}

function renderSuggestions(items) {
  dom.suggestions.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "suggestion-item";
    li.innerHTML = `
      <div class="user">
        <img src="${item.avatar}" alt="${item.user}'s avatar" />
        <div>
          <strong>@${item.user}</strong>
          <span>${item.reason}</span>
        </div>
      </div>
      <button class="follow-button">Follow</button>
    `;

    const followButton = li.querySelector(".follow-button");
    followButton.addEventListener("click", () => {
      const isFollowing = followButton.classList.toggle("is-active");
      followButton.textContent = isFollowing ? "Following" : "Follow";
      showToast(
        isFollowing
          ? `You are now following @${item.user}`
          : `Unfollowed @${item.user}`,
      );
    });

    dom.suggestions.appendChild(li);
  });
}

function renderTags(tags) {
  dom.tags.innerHTML = "";
  tags.forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${entry.tag}</span>
      <span>${entry.posts} posts</span>
    `;
    dom.tags.appendChild(li);
  });
}

function renderNotifications(items) {
  dom.notificationsList.innerHTML = "";
  items.forEach((notif) => {
    const li = document.createElement("li");
    li.className = "notification-item";
    li.innerHTML = `
      <img src="${notif.avatar}" alt="${notif.user}'s avatar" />
      <div class="notification-content">
        <div>
          <strong>@${notif.user}</strong> ${notif.message}
        </div>
        <time>${notif.time}</time>
      </div>
      ${
        notif.preview
          ? `<img src="${notif.preview}" alt="Preview" class="notif-preview" />`
          : ""
      }
    `;
    if (notif.unread) {
      li.dataset.unread = "true";
    }
    dom.notificationsList.appendChild(li);
  });
}

function renderConversations(conversations) {
  dom.conversationList.innerHTML = "";
  conversations.forEach((conversation) => {
    const tile = document.createElement("button");
    tile.className = "conversation-tile";
    tile.dataset.id = conversation.id;
    tile.innerHTML = `
      <img src="${conversation.user.avatar}" alt="${conversation.user.username}'s avatar" />
      <div class="conversation-meta">
        <strong>${conversation.user.displayName}</strong>
        <span>@${conversation.user.username}</span>
        <p>${conversation.lastMessage}</p>
      </div>
    `;
    tile.addEventListener("click", () => openConversation(conversation));
    dom.conversationList.appendChild(tile);
  });
}

function openConversation(conversation) {
  activeConversation = conversation.id;
  dom.conversationList
    .querySelectorAll(".conversation-tile")
    .forEach((tile) => {
      tile.classList.toggle("is-active", tile.dataset.id === conversation.id);
    });

  const view = document.createElement("div");
  view.innerHTML = `
    <header class="conversation-header">
      <div class="user">
        <img src="${conversation.user.avatar}" alt="${conversation.user.displayName}" />
        <div>
          <strong>${conversation.user.displayName}</strong>
          <span>@${conversation.user.username}</span>
        </div>
      </div>
    </header>
    <div class="message-thread"></div>
    <form class="message-input" autocomplete="off">
      <input type="text" name="message" placeholder="Send a message" required />
      <button type="submit">Send</button>
    </form>
  `;
  view.className = "conversation-view";

  const thread = view.querySelector(".message-thread");
  conversation.messages.forEach((message) => {
    const bubble = document.createElement("div");
    bubble.className = "message-bubble";
    if (message.from === "me") bubble.classList.add("me");
    bubble.textContent = message.text;
    thread.appendChild(bubble);
  });
  thread.scrollTop = thread.scrollHeight;

  const form = view.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.elements.message;
    const text = input.value.trim();
    if (!text) return;
    conversation.messages.push({ from: "me", text });
    const bubble = document.createElement("div");
    bubble.className = "message-bubble me";
    bubble.textContent = text;
    thread.appendChild(bubble);
    thread.scrollTo({ top: thread.scrollHeight, behavior: "smooth" });
    input.value = "";
  });

  dom.conversationView.innerHTML = "";
  dom.conversationView.appendChild(view);
}

function openStory(story) {
  clearStoryTimers();
  dom.storyViewerImg.src = story.image;
  dom.storyViewerUser.textContent = story.user;
  dom.storyViewerCaption.textContent = story.caption;
  dom.storyProgressBar.style.width = "0%";
  dom.storyViewer.classList.remove("hidden");

  const duration = 6000;
  const start = performance.now();

  function animate(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    dom.storyProgressBar.style.width = progress * 100 + "%";
    if (progress < 1) {
      storyAnimationFrame = requestAnimationFrame(animate);
    } else {
      storyTimer = setTimeout(closeStoryViewer, 600);
    }
  }

  storyAnimationFrame = requestAnimationFrame(animate);
}

function clearStoryTimers() {
  if (storyTimer) {
    clearTimeout(storyTimer);
    storyTimer = null;
  }
  if (storyAnimationFrame) {
    cancelAnimationFrame(storyAnimationFrame);
    storyAnimationFrame = null;
  }
}

function closeStoryViewer() {
  clearStoryTimers();
  dom.storyViewer.classList.add("hidden");
}

function togglePanel(panel, button) {
  const isHidden = panel.classList.contains("hidden");
  document.querySelectorAll(".panel").forEach((p) => {
    if (p !== panel) p.classList.add("hidden");
  });
  document
    .querySelectorAll('.nav-actions [aria-expanded="true"]')
    .forEach((btn) => btn.setAttribute("aria-expanded", "false"));

  if (isHidden) {
    panel.classList.remove("hidden");
    if (button) button.setAttribute("aria-expanded", "true");
  } else {
    panel.classList.add("hidden");
    if (button) button.setAttribute("aria-expanded", "false");
  }
}

function closePanels() {
  document
    .querySelectorAll(".panel")
    .forEach((panel) => panel.classList.add("hidden"));
  document
    .querySelectorAll('.nav-actions [aria-expanded="true"]')
    .forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function openCreateModal() {
  dom.createModal.classList.remove("hidden");
  dom.createModal.querySelector("input[name='photo']").focus();
}

function closeCreateModal() {
  dom.createModal.classList.add("hidden");
}

function handleCreatePost(event) {
  event.preventDefault();
  const formData = new FormData(dom.createForm);
  const photo = formData.get("photo");
  const caption = formData.get("caption");
  const location = formData.get("location") || "";

  const hashtags = Array.from(
    new Set((caption.match(/#[\w]+/g) || []).map((tag) => tag)),
  );

  const newPost = {
    id: `post-${Date.now()}`,
    user: state.currentUser.username,
    displayName: state.currentUser.displayName,
    avatar: state.currentUser.avatar,
    location: location || "Somewhere on Earth",
    image: photo,
    caption,
    likes: 0,
    liked: false,
    saved: false,
    time: "Just now",
    tags: hashtags.length ? hashtags : ["#chromashare"],
    comments: [],
  };

  state.posts.unshift(newPost);
  dom.profilePostCount.textContent = (
    Number(dom.profilePostCount.textContent) + 1
  ).toString();
  dom.createForm.reset();
  closeCreateModal();
  renderFeed(state.posts);
  showToast("Post published to your feed");
}

function handleSearch(event) {
  const value = event.target.value.trim().toLowerCase();
  if (!value) {
    renderFeed(state.posts);
    return;
  }
  const filtered = state.posts.filter((post) => {
    const inCaption = post.caption.toLowerCase().includes(value);
    const inUser = post.user.toLowerCase().includes(value);
    const inTags = post.tags.some((tag) => tag.toLowerCase().includes(value));
    return inCaption || inUser || inTags;
  });
  renderFeed(filtered);
  if (!filtered.length) {
    showToast("No posts matched your search");
  }
}

function initEventListeners() {
  document
    .querySelectorAll('[data-action="notifications"]')
    .forEach((button) => {
      button.addEventListener("click", () =>
        togglePanel(dom.notificationsPanel, button),
      );
    });

  document.querySelectorAll('[data-action="messages"]').forEach((button) => {
    button.addEventListener("click", () =>
      togglePanel(dom.messagesPanel, button),
    );
  });

  document.querySelectorAll('[data-action="create"]').forEach((button) => {
    button.addEventListener("click", openCreateModal);
  });

  document.querySelectorAll("[data-close]").forEach((button) => {
    const target = document.getElementById(button.dataset.close);
    button.addEventListener("click", () => {
      target.classList.add("hidden");
      clearStoryTimers();
    });
  });

  dom.createForm.addEventListener("submit", handleCreatePost);
  dom.globalSearch.addEventListener("input", handleSearch);

  const editProfileButton = document.querySelector(
    '[data-action="edit-profile"]',
  );
  if (editProfileButton) {
    editProfileButton.addEventListener("click", () =>
      showToast("Profile editor is coming soon"),
    );
  }

  const viewAllStories = document.querySelector(
    '[data-action="view-all-stories"]',
  );
  if (viewAllStories) {
    viewAllStories.addEventListener("click", () => {
      if (state.stories.length) {
        openStory(state.stories[0]);
      }
    });
  }

  document.querySelectorAll(".highlight-card").forEach((card) => {
    card.addEventListener("click", () => {
      const highlight = card.dataset.highlight;
      showToast(`Highlight '${highlight}' coming soon`);
    });
  });

  document.querySelectorAll(".live-card").forEach((card) => {
    card.addEventListener("click", () => {
      const host = card.querySelector("strong").textContent;
      showToast(`Tuning into ${host}'s live session`);
    });
  });

  document.querySelectorAll(".composer .pill").forEach((pill) => {
    pill.addEventListener("click", () => showToast("Feature coming soon"));
  });

  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      document
        .querySelectorAll(".menu-link")
        .forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
      const view = link.dataset.view || "feed";
      showToast(`${view.charAt(0).toUpperCase() + view.slice(1)} view`);
    });
  });

  dom.storyViewer.addEventListener("click", (event) => {
    if (event.target === dom.storyViewer) {
      closeStoryViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeStoryViewer();
      closeCreateModal();
      closePanels();
    }
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    if (
      !dom.notificationsPanel.contains(event.target) &&
      !event.target.closest('[data-action="notifications"]')
    ) {
      dom.notificationsPanel.classList.add("hidden");
      document
        .querySelectorAll('[data-action="notifications"]')
        .forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    }

    if (
      !dom.messagesPanel.contains(event.target) &&
      !event.target.closest('[data-action="messages"]')
    ) {
      dom.messagesPanel.classList.add("hidden");
      document
        .querySelectorAll('[data-action="messages"]')
        .forEach((btn) => btn.setAttribute("aria-expanded", "false"));
    }
  });

  const markReadButton = dom.notificationsPanel.querySelector(
    '[data-action="mark-read"]',
  );
  markReadButton.addEventListener("click", () => {
    state.notifications.forEach((notif) => (notif.unread = false));
    renderNotifications(state.notifications);
    showToast("Notifications cleared");
  });
}

function init() {
  renderStories(state.stories);
  renderFeed(state.posts);
  renderSuggestions(state.suggestions);
  renderTags(state.tags);
  renderNotifications(state.notifications);
  renderConversations(state.conversations);
  initEventListeners();
}

init();
