const useTrimText = (text: string, maxLength: number):string => {
    if (maxLength < 0) {
        return text;
      }
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default useTrimText