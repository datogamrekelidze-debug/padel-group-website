export default function Home() {
  return (
    <main style={{
      minHeight:"100vh",
      background:"black",
      color:"white",
      padding:"60px",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    }}>
      <div style={{
        color:"#a3e635",
        marginBottom:"20px",
        fontWeight:"bold",
        letterSpacing:"2px"
      }}>
        კორტები • კლუბები • საზოგადოება
      </div>

      <h1 style={{
        fontSize:"72px",
        lineHeight:"0.95",
        maxWidth:"900px",
        margin:"0 0 30px 0"
      }}>
        ვქმნით პადელის მომავალს საქართველოში
      </h1>

      <p style={{
        maxWidth:"700px",
        color:"#bbbbbb",
        fontSize:"20px",
        lineHeight:"1.8"
      }}>
        Padel Group ქმნის პრემიუმ პადელის ინფრასტრუქტურას —
        თანამედროვე კლუბებიდან და დახურული კორტების სისტემებიდან
        სპორტულ საზოგადოებამდე.
      </p>

      <div style={{
        display:"flex",
        gap:"20px",
        marginTop:"40px",
        flexWrap:"wrap"
      }}>
        <button style={{
          background:"#a3e635",
          color:"black",
          border:"none",
          padding:"16px 28px",
          borderRadius:"999px",
          fontWeight:"bold",
          fontSize:"16px"
        }}>
          პროექტების ნახვა
        </button>

        <button style={{
          background:"transparent",
          color:"white",
          border:"1px solid #333",
          padding:"16px 28px",
          borderRadius:"999px",
          fontWeight:"bold",
          fontSize:"16px"
        }}>
          დაგვიკავშირდით
        </button>
      </div>
    </main>
  );
}