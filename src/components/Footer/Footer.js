import React, { Component } from "react"
import facebook from "images/facebook.svg"
import instagram from "images/instagram.svg"
import wa from "images/wa.svg"
import { Link } from "gatsby"
import styles from "./Footer.module.less"

export default class extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        {this.props.children}
        <div className={styles.content}>
          <p>
            © {new Date().getFullYear()}, SEYO México |{" "}
            <Link to="/privacidad">Aviso de Privacidad</Link>
            <span>
              BLVD DE LOS REYES 6431,
              <br /> N.I. 1701, SAN BERNARDINO, <br />
              TLAXCALANCINGO,PUEBLA 72820
            </span>
          </p>
          <div className={styles.flex}>
            <a
              href="https://www.facebook.com/seyomx/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={facebook} alt="Facebook Logo" title="Facebook Logo" />
            </a>
            <a
              href="https://www.instagram.com/seyomx/?hl=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src={instagram}
                alt="Instagram Logo"
                title="Instagram Logo"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+5212223245630&text=Estoy%20interesado%20en%20sus%20productos."
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={wa} alt="WhatsApp Logo" title="WhatsApp Logo" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
