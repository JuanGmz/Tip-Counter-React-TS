import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}

export default function OrderTotals({ order, tip }: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totals and Tips</h2>

                <p>Subtotal to be paid: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>

                <p>Tip: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total to be paid: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button>

            </button>
        </>
    )
}