export default function breakIntoParts(num, parts) {
    return [...Array(parts)].map((_,i) => 
          0|num/parts+(i < num%parts));
} 