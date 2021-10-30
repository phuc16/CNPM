import './DataTable.css'

export default function DataTable() {
    return (
      <div className="data-container"> 

      <div className="data-title">Code</div>
      <div className="data-title">Price</div>
      <div className="data-title">Date</div>

      <div className="data-item">abc</div>
      <div className="data-item">abc</div>
      <div className="data-item">abc</div>
  
      <div className="data-item">cde</div>
      <div className="data-item">cde</div>
      <div className="data-item">cde</div>
  
      <div className="data-item">efg</div>
      <div className="data-item">efg</div>
      <div className="data-item">efg</div>
  
      <div className="data-item">hik</div>
      <div className="data-item">hik</div>
      <div className="data-item">hik</div>
  
      <div className="data-item">klm</div>
      <div className="data-item">klm</div>
      <div className="data-item">klm</div>
  
      <div className="data-item">mno</div>
      <div className="data-item">mno</div>
      <div className="data-item">mno</div>

      <div></div>
      <div></div>
      <div className="nav-link">
      <a href="#"> Previous </a>
      <span style={{margin: 'auto 4px'}}>2</span>
      <a href="#"> Next </a>
      </div>

      </div>
    );
  }