import java.util.Arrays;
import java.util.List;

public class OrdemServico {

	
	public static void main (String args[])
	{
		
		//R7 - Se não for 4 argumentos, retornar -1
				if (args.length != 4) {
					System.out.println("Teste1");
					System.exit(-1);
				}

		//R8 - Programa deve retornar -1 se algum dos argumentos for não inteiro
				if (!(isNumeric(args[0]))|| !(isNumeric(args[1]))|| 
					!(isNumeric(args[2]))||!(isNumeric(args[3]))){
						System.out.println("Teste2");
						System.exit(-1);
			}
		//R9 - Deve retornar -1 se algum dos valores de argumentos for negativo
				if ((isNegative(args[0]))|| (isNegative(args[1]))|| 
						(isNegative(args[2]))||(isNegative(args[3]))){
							System.out.println("Teste3");
							System.exit(-1);
				}
				
				
		//RN5 - O programa irá interpretar os argumentos recebidos, conforme a ordem dos requisitos
		//seguintes
		//RN1 - Data cuja semana é desejada. Data de Interesse		
		int di = Integer.parseInt(args[0]);
		int anoInteresse = di / 10000;
		int mesInteresse = di /100 % 100;
		int diaInteresse = di % 100;
		
		//RN2 - Um ano a ser considerado bissexto
		int aBix = Integer.parseInt(args[1]);
		
		//RN3 - Data de referência. Mesmo formato definido da data de interesse
		int dr = Integer.parseInt(args[2]);
		int anoReferencia = dr / 10000;
		int mesReferencia = dr /100 % 100;
		int diaReferencia = dr % 100;

		//RN4 Dia da semana da datade referência
		int dsr = Integer.parseInt(args[3]);
		
		//R10 - Deve retornar -1 se inteiro recebido como dia da semana for maior que 6
		if(dsr > 6)
			System.exit(-1);
		
		//R11 - Deve retornar -1 se inteiro recebido como ano bissexto for menor que 1
		if(aBix < 1)
			System.exit(-1);
		
		//R12 - Retornar -1 se a data de interesse ou a data de referência for inválida
		if(!(dataValida(di)) || !(dataValida(dr)))
				System.exit(-1);
		
		System.out.println(diaInteresse + " " + mesInteresse + " " + anoInteresse);
	}
				
	//método que valida argumentos inteiros
	public static boolean isNumeric (String s){
		try {
			Integer.parseInt(s);
			return true;
		} catch (NumberFormatException ex){
			return false;
		}
	}
	//método que valida argumentos negativos
	public static boolean isNegative (String s){
		try {
			if (Integer.parseInt(s) < 0) 
				return true;
			else
				return false;
		} catch (NumberFormatException ex){
			return false;
		}
	}
	//método que valida argumento como sendo uma data válida
	public static boolean dataValida(Integer s)
	{
		//a) A data deve possuir exatamente 8 dígitos no formato aaaammdd
		if (s.SIZE != 8)
			return false;
		//b) O primeiro dígito da data não pode ser 0
		if ((s / 10000) < 1000)
			return false;
		//c) O mês mm é zero ou maior que 12
		if (((s /100 % 100) < 1) || ((s /100 % 100) > 12))
			return false;
		//d) O dia dd é zero ou maior que 31
		if (((s % 100) < 1) || ((s % 100) > 31))
			return false;
		//e) o dia dd é incompatível com o mês
		if ( (s /100 % 100)	||
				||
			) 
	}
}
