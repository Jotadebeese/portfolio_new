export default async function LoadingUsers() {
    return (
    <div className="loader-container fade-in">
        <img src="/temp.gif" />
        <div className="loader"></div>
        <p>Uploading data  .  .  .</p>
    </div>
    );
  }