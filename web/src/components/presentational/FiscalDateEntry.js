export const FiscalDateEntry = {
    render: function() {
        var date = this.props.entry.date;
        var fiscal_day = this.props.entry.fiscal_day;
        var fiscal_week = this.props.entry.fiscal_week;
        var fiscal_month = this.props.entry.fiscal_month;
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
}
