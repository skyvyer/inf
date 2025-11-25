"use client";

export default function Home() {
  return (
    <>
      <nav>
        <a href="#home">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="#portfolio">Портфолио</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <section id="home">
        <h1>Bruse Portfolio</h1>
        <p>
        Добро пожаловать в Bruse Portfolio — личное пространство, где собраны мои проекты и опыт. Я работаю над современными и аккуратно продуманными решениями, уделяя внимание деталям и качеству. Здесь вы найдете мои работы, подход к задачам и можете быстро связаться со мной. Этот сайт создан как удобная точка входа для тех, кто хочет узнать больше о моем стиле и профессионализме.
        </p>
      </section>

      <section id="about">
        <h2>Обо мне</h2>
        <p>
          Я занимаюсь созданием проектов, которые сочетают в себе эстетику, функциональность и ясную структуру. В работе для меня важны аккуратность, понятность и ориентация на результат. Я постоянно развиваю свои навыки и изучаю новые инструменты, чтобы предлагать решения, которые соответствуют современным требованиям. Каждый проект — это возможность стать лучше и создать что-то ценное для клиентов и пользователей.
        </p>
      </section>

      <section id="portfolio">
        <h2>Портфолио</h2>
        <p>
          В этом разделе представлена подборка моих проектов. Здесь вы можете увидеть, как я работаю с задачами разного уровня сложности — от небольших индивидуальных работ до более комплексных решений. Каждая работа отражает мой подход: внимание к детали, аккуратный стиль и стремление к понятному и удобному результату. Я беру проекты, которые позволяют развиваться, экспериментировать и приносить реальную пользу.
        </p>
        <div className="gallery">
          <img src="/your-photo-1.jpg" alt="project 1" />
          <img src="/your-photo-2.jpg" alt="project 2" />
          <img src="/your-photo-3.jpg" alt="project 3" />
        </div>
      </section>

      <section id="contacts">
        <h2>Контакты</h2>
        <p>
          Готов обсудить ваш проект и предложить оптимальное решение. Свяжитесь со мной через форму
          ниже или используйте указанные контакты.
        </p>
        <form
          action="#"
          onSubmit={(e) => {
            const email = e.target.email.value;
            if (!email.includes("@")) {
              e.preventDefault();
              alert("Введите корректный email");
            }
          }}
        >
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Сообщение" required />
          <button type="submit">Отправить</button>
        </form>
        <p>
          Телефон: <a href="tel:+79991234567">+7 999 123 45 67</a><br />
          Email: <a href="mailto:example@mail.ru">example@mail.ru</a>
        </p>
      </section>

      <footer>
        © {new Date().getFullYear()} Bruse Portfolio. Все права защищены.
        <div style={{ marginTop: "10px" }}>
          <a href="#" style={{ marginRight: "10px" }}>VK</a>
          <a href="#">Telegram</a>
        </div>
      </footer>
    </>
  );
}
