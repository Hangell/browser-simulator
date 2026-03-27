# 🌐 Browser Simulator (Playwright)

Ferramenta para simular **navegadores modernos (Safari/WebKit, Chrome)** e **dispositivos mobile (iPhone, iPad, Android)** diretamente no Linux, Windows ou macOS — sem necessidade de um Mac físico.

Ideal para reproduzir bugs específicos relacionados a:
- Safari (WebKit)
- iPhone (iOS)
- diferenças de layout mobile
- inconsistências entre browsers

---

## 🚀 Instalação

```bash
npm install
```

Isso automaticamente irá:
- instalar o Playwright
- baixar os browsers necessários

---

## ⚠️ Linux (importante)

Se o WebKit não abrir, execute:

```bash
sudo npx playwright install-deps
```

---

## ▶️ Uso básico

### Safari Desktop (default)

```bash
node main.js
```

---

### 📱 iPhone (Safari)

```bash
node main.js mode=iphone
```

---

### 📱 iPad

```bash
node main.js mode=ipad
```

---

### 🤖 Android (Chrome)

```bash
node main.js mode=android
```

---

### 💻 Desktop Chrome

```bash
node main.js mode=desktop-chrome
```

---

## 🌐 Definir URL

```bash
node main.js mode=iphone url=https://hangell.org
```

---

## ⚙️ Opções disponíveis

| Parâmetro        | Descrição                          | Default |
|----------------|----------------------------------|--------|
| mode           | Tipo de dispositivo               | desktop-safari |
| url            | URL a ser carregada              | Autocompara DEV |
| headless       | Executar sem UI                  | false |
| devtools       | Abrir DevTools automaticamente   | true |
| screenshot     | Salvar screenshot                | false |
| screenshotPath | Caminho do screenshot            | debug.png |
| timeout        | Timeout da página (ms)           | 60000 |

---

## 📸 Screenshot automático

```bash
node main.js mode=iphone screenshot=true
```

ou

```bash
node main.js mode=iphone screenshot=true screenshotPath=iphone-bug.png
```

---

## 🧪 Exemplos

### Testar bug no iPhone

```bash
node main.js mode=iphone url=https://site.aqui
```

---

### Rodar headless (CI / automação)

```bash
node main.js mode=iphone headless=true devtools=false
```

---

## 🧠 Modos disponíveis

- desktop-safari → Safari desktop (WebKit)
- iphone → iPhone (Safari)
- ipad → iPad (Safari)
- android → Android Chrome
- desktop-chrome → Chrome desktop

---

## 🛠 Troubleshooting

### Tela preta no WebKit
- Problema comum no Linux com emulação mobile
- Use modo iphone manual (já tratado no script)

---

### WebKit não abre

```bash
sudo npx playwright install-deps
```

---

### Página não carrega
- Verifique VPN
- Verifique ambiente DEV
- Verifique timeout

---

## 🎯 Objetivo

Essa ferramenta foi criada para:

- Reproduzir bugs do Safari/iPhone
- Evitar dependência de Mac físico
- Acelerar debugging no Autocompara
- Padronizar testes entre ambientes

---

## ⚡ Dica

Se um bug:
- aparece no iPhone
- não aparece no Chrome

👉 rode:

```bash
node main.js mode=iphone
```

---

## 📌 Resumo

- Sem Mac ✔️  
- Safari simulado ✔️  
- iPhone simulado ✔️  
- Multi-browser ✔️  
- Debug rápido ✔️  