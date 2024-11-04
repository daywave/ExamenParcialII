class Loan {
    constructor(id_prestamo, id_cliente, monto, meses, interes, estado) {
        this.id_prestamo = id_prestamo;
        this.id_cliente = id_cliente;
        this.monto = monto;
        this.meses = meses;
        this.interes = interes;
        this.estado = estado;
    }

    validate() {
        if (!this.id_cliente) throw new Error('El ID del cliente es requerido');
        if (!this.monto || this.monto <= 0) throw new Error('El monto debe ser mayor a 0');
        if (!this.meses || this.meses <= 0) throw new Error('El plazo debe ser mayor a 0');
        if (!this.interes || this.interes < 0) throw new Error('El interés no puede ser negativo');
    }

    // Calcula la tabla de amortización
    calculateAmortizationTable() {
        const tasaMensual = this.interes / 100 / 12;
        const cuotaFija = this.monto * (tasaMensual * Math.pow(1 + tasaMensual, this.meses)) / 
                         (Math.pow(1 + tasaMensual, this.meses) - 1);
        
        let saldoPendiente = this.monto;
        const tabla = [];

        for (let i = 1; i <= this.meses; i++) {
            const interesCuota = saldoPendiente * tasaMensual;
            const capitalCuota = cuotaFija - interesCuota;
            saldoPendiente -= capitalCuota;

            tabla.push({
                numero_cuota: i,
                monto_cuota: cuotaFija,
                fecha_pago: this.calcularFechaPago(i),
                interes_cuota: interesCuota,
                capital_cuota: capitalCuota,
                saldo_restante: Math.max(0, saldoPendiente)
            });
        }

        return tabla;
    }

    calcularFechaPago(numeroCuota) {
        const fecha = new Date();
        fecha.setMonth(fecha.getMonth() + numeroCuota);
        return fecha.toISOString().split('T')[0];
    }
}


module.exports = Loan;