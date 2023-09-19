import classes from "./Forgot.module.css";
const Forgot = () => {
  return (
    <div className={classes.forgot}>
      <section>
        <form>
          <label htmlFor="email">
            Enter the email with which you have registered
          </label>
          <input type="email" placeholder="Email" required></input>
          <div>
            <button>send Link</button>
          </div>

          <div className={classes.user}>
            <button>already an user? login</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Forgot;
