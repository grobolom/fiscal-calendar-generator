export const FiscalDateEntry = React.createClass({
    render: function() {
        var date = this.props.date;
        var fiscal_day = this.props.fiscal_day;
        var fiscal_week = this.props.fiscal_week;
        var fiscal_month = this.props.fiscal_month;
        var day = '1';
        var month = '1';
        var year = '1';
        var fiscal_year = '1';
        return (
            <tr>
                <td>{ day }</td>
                <td>{ month }</td>
                <td>{ year }</td>
                <td>{ date }</td>
                <td>{ fiscal_day }</td>
                <td>{ fiscal_week }</td>
                <td>{ fiscal_month }</td>
                <td>{ fiscal_year }</td>
            </tr>
        );
    }
});
