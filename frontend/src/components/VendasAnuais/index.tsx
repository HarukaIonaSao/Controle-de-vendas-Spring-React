import NotificationButton from "../NotificatioButton";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {  useState } from "react";

function VendasAnuais() {
    
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate,setMinDate] = useState(min);
    const [maxDate,setMaxDate] = useState(max);



  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">Quadrimestre</th>
              <th className="show576">Fechamento</th>
              <th>Produto</th>
              <th className="show992">Unidades</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#1</td>
              <td className="show576">08/04/2022</td>
              <td>Baseus Wm01</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 7000.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#2</td>
              <td className="show576">08/08/2022</td>
              <td>Qkz Ak6</td>
              <td className="show992">90</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#3</td>
              <td className="show576">08/12/2022</td>
              <td>Garrafa Led</td>
              <td className="show992">18</td>
              <td className="show992">11</td>
              <td>R$ 52450.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VendasAnuais;
