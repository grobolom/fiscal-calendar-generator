export const FiscalDateEntry = React.createClass({
    render: function() {
        var day = this.props.day;
        var month = this.props.month;
        var year = this.props.year;
        var date = this.props.date;
        var fiscal_day = this.props.fiscal_day;
        var fiscal_week = this.props.fiscal_week;
        var fiscal_month = this.props.fiscal_month;
        var fiscal_year = this.props.fiscal_year;
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
