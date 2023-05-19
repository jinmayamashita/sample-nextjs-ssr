export function Skeleton() {
  return (
    <>
      <style>
        {`
        .loading {
          background: linear-gradient(147deg, #dee4ea 0%, #fff 74%);
          width: 100%;
          height: 100%;
          animation-name: gradation;
          animation-duration: 1s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
        @keyframes gradation {
          0%{
            background-position: 0% 0%;
        }
        100%{
            background-position: 100% 100%;
        }
        
        
      }`}
      </style>
      <div className="loading" />
    </>
  );
}
