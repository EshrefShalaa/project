puts "Enter a phrase you would like scrambled:"
$initial_phrase = gets.chomp


puts "Enter a number to scramble the letters by:"


def run_program()
  scramble_num = gets.chomp

  if scramble_num == scramble_num.to_i.to_s
    scramble_num = scramble_num.to_i
    ceasar_cipher($initial_phrase, scramble_num)
  else
    puts "Enter a number please:"
    run_program()
  end
end


def get_new_num(n)
  if n > 25
    n = n-26*(n/26)
  elsif n < -25
    n = -(n)
    n = -(n-26*(n/26))
  else
    n = n
  end
end

def ceasar_cipher(str, num)

  alphabet = ("a".."z").to_a

  
  final_phrase = ""

  arr = str.split('')
  new_arr = arr.each do |letter|
    case letter
    when "a".."z"
      displaced_num = num + alphabet.index(letter)
      final_phrase += alphabet[get_new_num(displaced_num)]
    when "A".."Z"
      displaced_num = num + alphabet.index(letter.downcase)
      final_phrase += alphabet[get_new_num(displaced_num)].upcase
    else
      final_phrase += letter
    end
  end
  puts "Your scrambled text:"
  print "#{final_phrase}\n"
end

run_program()