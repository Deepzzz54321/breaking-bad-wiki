export default function Quotes({ quotes }) {
  return (
    <div className="">
      <h5 className="text-secondary">Popular Quotes</h5>
      <div className="overflow-auto" style={{ maxHeight: "28rem" }}>
        {quotes.map((quote, index) => (
          <p
            key={index}
            className={index % 2 == 0 ? "text-primary" : "text-secondary"}
          >
            "{quote.quote}"
          </p>
        ))}
      </div>
    </div>
  );
}
