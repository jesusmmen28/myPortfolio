export const dataContactService = async ({ nombre, email, telefono, comentario  }) => {
    const response = await fetch(`${process.env.REACT_APP_API}/comentario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, telefono, comentario }),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.message;
   
  };