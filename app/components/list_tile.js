// app/components/ListTile.js
export default function ListTile({ product, onDelete }) {
    return (
        <div className="d-flex justify-content-between align-items-center p-2 rounded border mb-1">
            <div>
                <h5 className="mb-1">{product.productName}</h5>
                <p className="mb-0">Model: {product.productModel}</p>
            </div>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Sil</button>
        </div>
    );
}
