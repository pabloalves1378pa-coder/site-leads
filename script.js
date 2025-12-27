* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: #0f172a;
  color: #e5e7eb;
  line-height: 1.6;
}

/* MENU */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: rgba(2,6,23,0.9);
  position: sticky;
  top: 0;
  z-index: 100;
}

header .logo img {
  width: 120px;
}

header nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

header nav ul li a {
  color: #e5e7eb;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

header nav ul li a:hover {
  color: #38bdf8;
}

/* HERO */
.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #020617, #0f172a);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 25px;
}

.hero .btn {
  padding: 15px 25px;
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  color: #020617;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
}

.hero .btn:hover {
  transform: translateY(-2px);
}

/* SEÇÕES */
.section {
  padding: 60px 20px;
  text-align: center;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 25px;
  color: #38bdf8;
}

/* CARDS */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background: #020617;
  padding: 20px;
  border-radius: 12px;
  width: 250px;
  transition: 0.3s;
}

.card i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #38bdf8;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  color: #cbd5f5;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(56,189,248,0.4);
}

/* FORMULÁRIO */
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
}

label {
  font-size: 0.85rem;
}

.input-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #020617;
  border: 1px solid #1e293b;
  padding: 0 12px;
  border-radius: 10px;
  margin-top: 6px;
}

.input-box i {
  color: #38bdf8;
  font-size: 1.1rem;
}

.input-box input {
  border: none;
  background: transparent;
  flex: 1;
  padding: 14px 0;
  color: #e5e7eb;
}

.input-box input::placeholder {
  color: #64748b;
}

.input-box:focus-within {
  border-color: #38bdf8;
  box-shadow: 0 0 0 2px rgba(56,189,248,0.3);
}

button {
  padding: 15px;
  background: linear-gradient(90deg, #38bdf8, #22d3ee);
  color: #020617;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(56,189,248,0.4);
}

.mensagem {
  margin-top: 18px;
  text-align: center;
  font-size: 0.95rem;
}

/* RODAPÉ */
footer {
  background: #020617;
  text-align: center;
  padding: 20px;
  color: #64748b;
  margin-top: 40px;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }
  
  header nav ul {
    flex-direction: column;
    gap: 10px;
  }
}
