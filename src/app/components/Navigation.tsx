import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Diabetes 360</div>
      <ul style={styles.navLinks}>
        <li><Link href="/" style={styles.link}>🏠 Home</Link></li>
        <li><Link href="/dashboard" style={styles.link}>📊 Dashboard</Link></li>
        <li><Link href="/exercise-tracker" style={styles.link}>🏋️ Exercise</Link></li>
        <li><Link href="/meal-plan" style={styles.link}>🍽️ Meal Plan</Link></li>
        <li><Link href="/med-tracker" style={styles.link}>💊 Medication</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.9) 1px, transparent 1px
    ), linear-gradient(90deg, rgba(0, 0, 0, 0.9) 1px, transparent 1px)`,
    backgroundSize: "8px 8px",
    backgroundColor: "#222",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  logo: {
    color: "#ffcc00",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textShadow: "2px 2px #ff6600",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    textShadow: "1px 1px #ff6600",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "0.3s",
  },
};

export default Navigation;
