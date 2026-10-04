// Textos comuns a todas as etapas.
const invitationContent = {
  eyebrow: "UM PLANO A DOIS",
  note: "Um convite misterioso.",
};

// Adicione, remova ou reordene objetos para mudar a sequência.
const refusalSteps = [
  {
    title: "Você está convidada para um ",
    highlight: "date surpresa.",
    question: "Aceita?",
    button: "Não",
  },
  {
    title: "Você tem ",
    highlight: "certeza?",
    question: "Não quer mesmo?",
    button: "Não mesmo?",
  },
  {
    title: "Pensa ",
    highlight: "bem…",
    question: "Ouvi dizer que vai ser bem legal.",
    button: "Ainda não?",
  },
  {
    title: "Tá ",
    highlight: "bom…",
    question: "Talvez esteja faltando uma informação importante.",
    button: "O que?",
  },
];

const revealContent = {
  eyebrow: "CHÁ DE REVELAÇÃO DO DATE",
  title: "Vai ser um ",
  highlight: "date artístico.",
  description: "Com comidinhas, musiquinhas e vinho 🍷🎨",
  question: "Agora você aceita?",
  button: "Sim ❤️",
  declineButton: "Não",
  note: "Um datezinho gostoso",
};

const declinedContent = {
  eyebrow: "SEM PRESSA",
  title: "Tudo ",
  highlight: "bem…",
  description: "",
  question: "",
  note: "",
};

const acceptedContent = {
  eyebrow: "TEMOS UM DATE",
  title: "Então está ",
  highlight: "combinado.",
  description: "Cacarecos e bebidinhas",
  question: "Vamos fazer coisas com nossas próprias mões.",
  note: "Tô animadoooo!",
};

const activityContent = {
  prompt: "Qual vai ser a nossa arte?",
  hint: "Escolha a sua favorita (pode mudar de ideia depois).",
  selectedLabel: "Escolhida ✓",
  options: [
    {
      id: "pintura",
      title: "Pintura",
      description: "Pintuas feias, vamos lá!",
      image: "assets/atelie.svg",
      confirmation: "Pintura escolhida!",
    },
    {
      id: "colagem",
      title: "Colagem",
      description: "Vamos fazer colagens com matériais questionáveis.",
      image: "assets/colagem.svg",
      confirmation: "Colagem escolhida!",
    },
  ],
};

// Preencha os detalhes reais aqui antes de compartilhar o convite.
const posterContent = {
  eyebrow: "EBAAAAAAA",
  title: "Simbora!",
  subtitle: "Artesanatos feios tem seu valor",
  description: "Sou bobo né",
  details: [
    { label: "Data", value: "Semana que vem? (Quando puder, seu outubro tá muito cheio)" },
    { label: "Horário", value: "Num sei" },
    { label: "Local", value: "Minha casinha?" },
  ],
  extras: ["Comidinhas", "Vinho", "Musiquinhas"],
  signoff: "Feito com nossas próprias mões.",
  viewButton: "Ver convite",
  changeButton: "Trocar atividade",
};

const declineButton = document.getElementById("decline-button");
const acceptButton = document.getElementById("accept-button");
const rejectButton = document.getElementById("reject-button");
const card = document.querySelector(".paper-card");
const poster = document.getElementById("final-invitation");
const viewInvitationButton = document.getElementById("view-invitation");
const message = document.getElementById("invitation-message");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const buttonArea = document.querySelector(".button-area");
const buttonPositions = ["right", "left", "right-low", "left-low"];
let currentStep = 0;
let messageAnimation;
let cardAnimation;
let stage = "refusal";
let selectedActivity = null;

function showFinalInvitation() {
  const activity = activityContent.options.find(option => option.id === selectedActivity);
  if (stage !== "accepted" || !activity) return;
  stage = "poster";
  const textFields = {
    "poster-eyebrow": posterContent.eyebrow,
    "poster-title": posterContent.title,
    "poster-subtitle": posterContent.subtitle,
    "poster-description": posterContent.description,
    "poster-signoff": posterContent.signoff,
    "poster-activity": activity.title,
    "change-activity": posterContent.changeButton,
  };
  for (const [id, text] of Object.entries(textFields)) {
    document.getElementById(id).textContent = text;
  }
  document.getElementById("poster-image").src = activity.image;
  const details = document.getElementById("poster-details");
  details.replaceChildren();
  for (const detail of posterContent.details) {
    const row = document.createElement("div");
    const label = document.createElement("dt");
    const value = document.createElement("dd");
    label.textContent = detail.label;
    value.textContent = detail.value;
    row.append(label, value);
    details.append(row);
  }
  const extras = document.getElementById("poster-extras");
  extras.replaceChildren();
  for (const text of posterContent.extras) {
    const item = document.createElement("li");
    item.textContent = text;
    extras.append(item);
  }
  cardAnimation?.cancel();
  card.hidden = true;
  poster.hidden = false;
  document.getElementById("poster-title").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
  if (!reducedMotion.matches && typeof poster.animate === "function") {
    cardAnimation = poster.animate(
      [{ opacity: 0, transform: "translateY(16px) rotate(-1deg)" },
        { opacity: 1, transform: "translateY(0) rotate(0)" }],
      { duration: 650, easing: "ease-out" },
    );
  }
}

function changeActivity() {
  if (stage !== "poster") return;
  stage = "accepted";
  cardAnimation?.cancel();
  poster.hidden = true;
  card.hidden = false;
  // Preserva a seleção e retorna o foco à opção atual.
  document.querySelector('input[name="activity"]:checked')?.focus();
}

function renderActivityChoices() {
  document.getElementById("activity-prompt").textContent = activityContent.prompt;
  document.getElementById("selection-feedback").textContent = activityContent.hint;
  const options = document.getElementById("activity-options");
  options.replaceChildren();

  for (const activity of activityContent.options) {
    const label = document.createElement("label");
    label.className = "activity-option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "activity";
    input.value = activity.id;
    const surface = document.createElement("span");
    surface.className = "activity-surface";
    const illustration = document.createElement("img");
    illustration.src = activity.image;
    illustration.alt = "";
    illustration.width = 240;
    illustration.height = 160;
    const title = document.createElement("strong");
    title.textContent = activity.title;
    const description = document.createElement("span");
    description.className = "activity-description";
    description.textContent = activity.description;
    const badge = document.createElement("span");
    badge.className = "activity-selected";
    badge.textContent = activityContent.selectedLabel;
    badge.setAttribute("aria-hidden", "true");
    surface.append(illustration, title, description, badge);
    label.append(input, surface);
    options.append(label);

    input.addEventListener("change", () => {
      if (stage !== "accepted" || !input.checked) return;
      selectedActivity = activity.id;
      viewInvitationButton.disabled = false;
      document.getElementById("selection-feedback").textContent = activity.confirmation;
    });
  }
}

function positionDeclineButton() {
  const shouldFloat = stage === "refusal" && currentStep > 0 && !reducedMotion.matches;
  if (shouldFloat && !declineButton.classList.contains("decline-button--floating")) {
    // Reserva a altura antes de tirar o botão do fluxo do cartão.
    buttonArea.style.minHeight = `${buttonArea.getBoundingClientRect().height}px`;
  }

  declineButton.classList.toggle("decline-button--floating", shouldFloat);
  declineButton.dataset.position = shouldFloat
    ? buttonPositions[(currentStep - 1) % buttonPositions.length]
    : "";
}

function renderMessage(content) {
  const title = document.getElementById("invitation-title");
  const highlight = document.createElement("em");
  highlight.textContent = content.highlight ?? "";
  title.replaceChildren(document.createTextNode(content.title), highlight);
  document.getElementById("invitation-question").textContent = content.question;
  document.getElementById("invitation-question").hidden = !content.question;
  const description = document.getElementById("invitation-description");
  description.textContent = content.description ?? "";
  description.hidden = !content.description;
}

function renderStep() {
  const content = refusalSteps[currentStep];
  renderMessage(content);
  declineButton.textContent = content.button ?? "Não";

  positionDeclineButton();
}

function advanceRefusal() {
  if (stage !== "refusal") return;
  if (currentStep < refusalSteps.length - 1) {
    currentStep += 1;
    renderStep();
  } else {
    showReveal();
  }
  animateMessage();
}

function animateMessage() {
  messageAnimation?.cancel();

  if (!reducedMotion.matches && typeof message.animate === "function") {
    messageAnimation = message.animate(
      [{ opacity: 0.35 }, { opacity: 1 }],
      { duration: 300, easing: "ease-out" },
    );
  }
}

function showReveal() {
  stage = "reveal";
  renderMessage(revealContent);
  document.getElementById("invitation-eyebrow").textContent = revealContent.eyebrow;
  document.getElementById("invitation-note").textContent = revealContent.note;
  positionDeclineButton();
  declineButton.hidden = true;
  acceptButton.textContent = revealContent.button;
  acceptButton.hidden = false;
  rejectButton.textContent = revealContent.declineButton;
  rejectButton.hidden = false;
  buttonArea.classList.add("button-area--reveal");
  buttonArea.style.minHeight = "";
  acceptButton.focus({ preventScroll: true });
}

function declineInvitation() {
  if (stage !== "reveal") return;
  stage = "declined";
  renderMessage(declinedContent);
  document.getElementById("invitation-eyebrow").textContent = declinedContent.eyebrow;
  document.getElementById("invitation-note").textContent = declinedContent.note;
  buttonArea.hidden = true;
  const title = document.getElementById("invitation-title");
  title.tabIndex = -1;
  title.focus({ preventScroll: true });
  animateMessage();
}

function acceptInvitation() {
  if (stage !== "reveal") return;
  stage = "accepted";
  messageAnimation?.cancel();
  renderMessage(acceptedContent);
  document.getElementById("invitation-eyebrow").textContent = acceptedContent.eyebrow;
  document.getElementById("invitation-note").textContent = acceptedContent.note;
  buttonArea.hidden = true;
  card.classList.add("paper-card--accepted");
  renderActivityChoices();
  document.getElementById("activity-choice").hidden = false;
  const title = document.getElementById("invitation-title");
  title.tabIndex = -1;
  title.focus({ preventScroll: true });

  if (!reducedMotion.matches && typeof card.animate === "function") {
    cardAnimation = card.animate(
      [{ opacity: 0.3, transform: "translateY(10px) scale(.98)" },
        { opacity: 1, transform: "translateY(0) scale(1)" }],
      { duration: 650, easing: "ease-out" },
    );
  }
}

document.getElementById("invitation-eyebrow").textContent = invitationContent.eyebrow;
document.getElementById("invitation-note").textContent = invitationContent.note;
declineButton.addEventListener("click", advanceRefusal);
acceptButton.addEventListener("click", acceptInvitation);
rejectButton.addEventListener("click", declineInvitation);
viewInvitationButton.textContent = posterContent.viewButton;
viewInvitationButton.addEventListener("click", showFinalInvitation);
document.getElementById("change-activity").addEventListener("click", changeActivity);
reducedMotion.addEventListener("change", () => {
  positionDeclineButton();
  if (reducedMotion.matches) {
    messageAnimation?.cancel();
    cardAnimation?.cancel();
  }
});
renderStep();
