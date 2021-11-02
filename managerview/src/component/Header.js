import './Header.css'

export default function Header(props) {
        return (
          <div>
          <div className = "header-bar">Restaurant Statistic</div>
          <div className="btn-container">
          <button>Order History</button>
          <button>Transaction History</button>
          <h1>{props.tab}</h1>
          </div>
          </div>
       
        );
}